import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormGroup, FormsModule, NgModel, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResetpassService } from '../resetpass.service';

@Component({
  selector: 'app-resetpassword',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.css'
})
export class ResetpasswordComponent {

  resetForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router , private resetservice:ResetpassService) { }

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(/^01\d{9}$/)]],
      accesscode: ['', Validators.required],
    });
  }
  get FormControls() {
    return this.resetForm.controls;
  }

  onSendCode(): void {
     const phone = this.resetForm.get('phone')?.value;
    // if (phone && this.resetForm.get('phone')?.valid) {
    //   this.resetservice.sendResetCode(phone).subscribe({
    //     next: () => {
    //       alert('تم إرسال الكود إلى رقم الهاتف الخاص بك.');
    //       document.getElementById("codecheck")!.style.display = "block";
    //     },
    //     error: () => alert('حدث خطأ أثناء إرسال الكود. حاول مرة أخرى.')
    //   });
    // }
    if (phone && this.resetForm.get('phone')?.valid) {
    document.getElementById("codecheck")!.style.display = "block";
    }
  }
  
  onSendCodeagain(): void {
   // const phone = this.resetForm.get('phone')?.value;
    // if (phone) {
    //   this.resetservice.resendResetCode(phone).subscribe({
    //     next: () => alert('تم إرسال الكود مرة أخرى.'),
    //     error: () => alert('فشل في إعادة إرسال الكود.')
    //   });
   // }
   document.getElementById("resendcodelabel")!.style.display = "block";
  }
  
  onSubmit(): void {
    // const phone = this.resetForm.get('phone')?.value;
    // const code = this.resetForm.get('accesscode')?.value;
  
    // this.resetservice.verifyResetCode(phone, code).subscribe({
    //   next: () => this.router.navigate(['./createnewpassword']),
    //   error: () => alert('الكود المدخل غير صحيح.')
    // });
    this.router.navigate(['./createnewpassword']);
  }
  
}
