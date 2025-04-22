import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { profileService } from './profileservice';

@Component({
  selector: 'app-techinical',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './techinical.component.html',
  styleUrl: './techinical.component.css'
})
export class TechinicalComponent {
  constructor(private fb: FormBuilder, private profileService: profileService) {}

  profileForm!: FormGroup;
  selectedFiles: File[] = [];
  fileNames: string[] = [];

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      job: ['', Validators.required],
      password: ['', Validators.required],
      serviceType: ['', Validators.required],
      nationalIdImages: [null],
      previousworkname: [null],
      previousworkimgs: [null],
      clientSection: [null],
      phone: ['', [Validators.required, Validators.pattern(/^01\d{9}$/)]],
      whatsapp: ['', [Validators.required, Validators.pattern(/^01\d{9}$/)]]
    });

    this.profileForm.get('serviceType')?.valueChanges.subscribe(value => {
      const roleDivMap: { [key: string]: { divId: string; controls: string[] } } = {
        'فني': { divId: 'previouswork', controls: ['previousworkname', 'previousworkimgs'] },
        'عميل': { divId: 'clientSection', controls: ['clientSection'] },
        'مزود خدمة': { divId: 'providerSection', controls: [] },
        'ادمن': { divId: 'adminSection', controls: [] }
      };

      Object.entries(roleDivMap).forEach(([role, { divId, controls }]) => {
        const div = document.getElementById(divId);
        if (div) {
          const isVisible = value === role;
          div.style.display = isVisible ? 'flex' : 'none';

          controls.forEach(controlName => {
            const control = this.profileForm.get(controlName);
            if (control) {
              if (isVisible) {
                control.addValidators(Validators.required);
              } else {
                control.clearValidators();
              }
              control.updateValueAndValidity();
            }
          });
        }
      });
    });
  }

  onFileSelected(event: any, controlName: string): void {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.profileForm.get(controlName)?.setValue(files);
    } else {
      this.profileForm.get(controlName)?.setValue(null);
    }
    this.profileForm.get(controlName)?.markAsTouched();
  }

  get FormControls(): any {
    return this.profileForm.controls;
  }

  onSubmit(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      alert('يرجى تعبئة جميع الحقول المطلوبة.');
      return;
    }

    const formValue = this.profileForm.value;
    this.profileService.submitProfile(formValue).subscribe({
      next: response => alert('تم التسجيل بنجاح!'),
      error: error => alert('حدث خطأ أثناء الإرسال.')
    });
  }
}