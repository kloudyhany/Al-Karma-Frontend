import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { loginservice } from './loginservice';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
/**
 * Represents the login component responsible for handling user authentication.
 */
export class loginComponent {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: loginservice,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
        ],
      ],
      password: ['', Validators.required],
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

    const credentials = this.loginForm.value;

    this.loginService.login(credentials).subscribe({
      next: (res) => {
        const token = res.token;
        const user = res.user;

        if (token && user) {
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));

          alert('تم تسجيل الدخول بنجاح!');

          const role = user.serviceType;

          if (role === 'عميل') {
            this.router.navigate(['/clientprofile']);
          } else if (role === 'فني') {
            this.router.navigate(['/techprofile']);
          } else if (role === 'ادمن') {
            this.router.navigate(['/admin']);
          } else {
            alert('دور غير معروف!');
          }
        } else {
          alert('الاستجابة غير صحيحة من الخادم.');
        }
      },
      error: (err) => {
        alert('فشل تسجيل الدخول: تأكد من البريد وكلمة المرور.');
        console.error(err);
      },
    });
  }
}
