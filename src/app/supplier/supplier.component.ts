import { CommonModule } from '@angular/common';
import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-supplier',
  imports: [ReactiveFormsModule, CommonModule , FormsModule],
  templateUrl: './supplier.component.html',
  styleUrl: './supplier.component.css'
})
export class SupplierComponent {
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
      supplyType: ['', Validators.required],
      nationalIdImages: [null, Validators.required],
      supplyList: [null, Validators.required],
      catalogs: [null, Validators.required],
      address: ['', Validators.required],
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
      alert('تم تسجيل المورد بنجاح!');
    }
  }
}

