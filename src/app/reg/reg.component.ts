import { CommonModule } from '@angular/common';
import { Component , NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reg',
  imports: [FormsModule , ReactiveFormsModule, CommonModule],
  templateUrl: './reg.component.html',
  styleUrl: './reg.component.css'
})
export class RegComponent {
  profileForm!: FormGroup;
  fileNames: string[] = [];

  constructor(private fb: FormBuilder , private router : Router) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,  Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      serviceType: ['', [Validators.required, Validators.pattern(/^(عميل|فني|ادمن)$/)]],
      password: ['', Validators.required],
      service: [''],
      previousworkname: [''],
      previousworkimgs: [''],
      nationalIdImages: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^01[2,5,0,1]\d{8}$/)]],
      whatsapp: ['', [Validators.required, Validators.pattern(/^01[2,5,0,1]\d{8}$/)]],
      address: ['']
    });

    // React to serviceType changes
    this.profileForm.get('serviceType')?.valueChanges.subscribe((serviceType) => {
      this.updateValidators(serviceType);
    });

    // Initialize once
    this.updateValidators(this.profileForm.get('serviceType')?.value);
  }

  get FormControls() {
    return this.profileForm.controls;
  }

  updateValidators(serviceType: string): void {
    const address = this.profileForm.get('address');
    const service = this.profileForm.get('service');
    const previousworkname = this.profileForm.get('previousworkname');
    const previousworkimgs = this.profileForm.get('previousworkimgs');

    // Reset all validators and disable by default
    [address, service, previousworkname, previousworkimgs].forEach(control => {
      control?.clearValidators();
      control?.setValue('');
      control?.disable();
    });

    if (serviceType === 'عميل') {
      address?.enable();
      address?.setValidators([Validators.required]);
    }

    if (serviceType === 'فني') {
      service?.enable();
      service?.setValidators([Validators.required]);

      previousworkname?.enable();
      previousworkname?.setValidators([Validators.required]);

      previousworkimgs?.enable();
      previousworkimgs?.setValidators([Validators.required]);
    }

    // Update validity
    [address, service, previousworkname, previousworkimgs].forEach(control => {
      control?.updateValueAndValidity();
    });
  }

  onimagesSelected(event: any, controlName: string) {
    const files: FileList = event.target.files;
    const control = this.profileForm.get(controlName);
  
    control?.markAsTouched();
    control?.updateValueAndValidity();
  }

  onFileSelected(event: any, controlName: string) {
    const files: FileList = event.target.files;
    const control = this.profileForm.get(controlName);

    if (files && files.length > 1 && files && files.length <3) {
      this.fileNames = Array.from(files).map(f => f.name);
      control?.setValue(files);
    } else if (files && files.length > 2) {
      alert('يرجى اختيار صورتين فقط واحدة للوجه و الاخري للخلف');
      this.fileNames = [];
      control?.setValue('');
    }
    else {
      this.fileNames = [];
      control?.setValue('');
    }
  
    control?.markAsTouched();
    control?.updateValueAndValidity();
  }

  onSubmit() {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      alert('يرجى تعبئة جميع الحقول المطلوبة');
      return;
    }
    
    // Store the form data in localStorage
    const formData = this.profileForm.value;
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        localStorage.setItem(key, JSON.stringify(formData[key]));
      }
    }

    console.log(formData);
    this.router.navigate(['/login']);
  }
}