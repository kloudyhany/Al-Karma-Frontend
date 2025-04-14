import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule , Validators , FormGroup , FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-techinical',
  imports: [CommonModule ,FormsModule , ReactiveFormsModule],
  templateUrl: './techinical.component.html',
  styleUrl: './techinical.component.css'
})
export class TechinicalComponent {
  constructor(private fb: FormBuilder) {}
  
  profileForm!: FormGroup;
  selectedFiles: File[] = [];
  fileNames: string[] = [];
  

  onFileSelected(event: any, controlName: string): void {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.profileForm.get(controlName)?.setValue(files); 
    } else {
      this.profileForm.get(controlName)?.setValue(null); 
    }
    this.profileForm.get(controlName)?.markAsTouched(); 
  }
  

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      job: ['', Validators.required],
      nationalIdImages: [null, Validators.required],
      previousworkname: [null, Validators.required],
      previousworkimgs: [null, Validators.required],
      phone: ['',[ Validators.required , Validators.pattern(/^01\d{9}$/)]],
      whatsapp: ['', [Validators.required, Validators.pattern(/^01\d{9}$/)]]
    });
  }

  get FormControls(): any {
    return this.profileForm.controls;
  }
 

  onSubmit(): void {
    if ( this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      alert('يرجى تعبئة جميع الحقول المطلوبة.');
      return;
    }
    else {
      alert('تم تسجيل الفني بنجاح!');
    }
  }
  
}
