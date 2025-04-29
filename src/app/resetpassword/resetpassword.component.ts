import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormGroup, FormsModule, NgModel, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.css'
})
export class ResetpasswordComponent {

  resetForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

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
    // Logic to send the reset code to the user's phone
    const phoneControl = this.resetForm.get('phone');
  if (phoneControl && phoneControl.valid) {
      // this.apiService.sendResetCode(phone).subscribe({
      //   next: () => {
      //     alert("تم إرسال الكود إلى رقم الهاتف الخاص بك.");
      //   },
      console.log("Reset code sent to the user's phone.");
      document.getElementById("codecheck")!.style.display = "block";
    }
  }
  onSendCodeagain(): void {
    // const phone = this.resetForm.get('phone')?.value;
    // if (!phone) {
    //   alert("يرجى إدخال رقم الهاتف لإعادة إرسال الكود.");
    //   return;
    // }
    // this.apiService.resendResetCode(phone).subscribe({
    //   next: () => {
    //     alert("تم إرسال الكود مرة أخرى إلى رقم الهاتف الخاص بك.");
    //   },
    //  }

    // Logic to send the reset code again to the user's phone
    console.log("Reset code sent again to the user's phone.");
  }
  onSubmit(): void {
    // logic to compare the code entered by the user with the code sent to the user's phone
    // if (this.resetForm.get('accesscode')?.value !== sentCode) {
    this.router.navigate(['./createnewpassword']);
    //}else {
    // alert("الكود المدخل غير صحيح. يرجى التحقق من الكود المدخل.");
    //}

  }
}
