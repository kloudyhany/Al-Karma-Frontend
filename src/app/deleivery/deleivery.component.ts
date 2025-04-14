import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule , Validators , FormBuilder , FormGroup} from '@angular/forms';

import { CommonEngine } from '@angular/ssr/node';

@Component({
  selector: 'app-deleivery',
  imports: [CommonModule , ReactiveFormsModule , FormsModule],
  templateUrl: './deleivery.component.html',
  styleUrl: './deleivery.component.css'
})
export class DeleiveryComponent {
  constructor(private fb: FormBuilder) {}
  
  delprofileForm!: FormGroup;
  selectedFiles: File[] = [];
  fileNames: string[] = [];
  

  onFileSelected(event: any, controlName: string): void {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.delprofileForm.get(controlName)?.setValue(files); 
    } else {
      this.delprofileForm.get(controlName)?.setValue(null); 
    }
    this.delprofileForm.get(controlName)?.markAsTouched(); 
  }
  

  ngOnInit(): void {
    this.delprofileForm = this.fb.group({
      name: ['', Validators.required],
      vehicleType: ['', Validators.required],
      nationalIdImages: [null, Validators.required],
      vehicleImg: [null, Validators.required],
      address: ['', Validators.required],
      whatsapp: ['', [Validators.required, Validators.pattern(/^01\d{9}$/)]]
    });
  }

  get FormControls(): any {
    return this.delprofileForm.controls;
  }
 

  onSubmit(): void {
    if ( this.delprofileForm.invalid) {
      this.delprofileForm.markAllAsTouched();
      alert('يرجى تعبئة جميع الحقول المطلوبة.');
      return;
    }
    else {
      alert('تم تسجيل السائق بنجاح!');
    }
  }
  
}
