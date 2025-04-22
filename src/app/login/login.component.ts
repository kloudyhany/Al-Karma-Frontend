import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { loginservice } from './loginservice';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule ,FormsModule , ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent {
  loginForm!: FormGroup ;

  constructor(private fb: FormBuilder, private loginService: loginservice) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(/^01\d{9}$/)]],
      password: ['', Validators.required]
    });
  }

  get FormControls() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      alert('يرجى تعبئة جميع الحقول.');
      return;
    }

    this.loginService.login(this.loginForm.value).subscribe({
      next: (response) => {
        alert('تم تسجيل الدخول بنجاح!');
        // Handle success (e.g., store token, redirect)
      },
      error: (error) => {
        alert('فشل تسجيل الدخول. تأكد من البيانات.');
      }
    });
  }
}
