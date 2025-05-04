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

    // قراءة بيانات المستخدم من localStorage
    const storedData = localStorage.getItem('userData');
    
    if (!storedData) {
      alert('لا توجد بيانات مسجلة!');
      return;
    }

    const formData = JSON.parse(storedData);
    
    // مقارنة البيانات المدخلة مع البيانات المخزنة
    const { email, password } = this.loginForm.value;

    if (email === formData.email && password === formData.password) {
      alert('تم تسجيل الدخول بنجاح!');
      
      // تخزين البيانات في الـ cookie إذا أردت
      document.cookie = `formData=${encodeURIComponent(JSON.stringify(formData))}; path=/;`;

      const userRole = formData.serviceType; // أو استخدم role إذا كنت تحفظه في البيانات

      // تحديد الدور
      if (userRole === 'عميل') {
        this.router.navigate(['/clientprofile']);
      } else if (userRole === 'فني') {
        this.router.navigate(['/techprofile']);
      } else if (userRole === 'ادمن') {
        this.router.navigate(['/admin-profile']);
      } else {
        alert('دور غير معروف');
      }
    } else {
      alert('البريد الإلكتروني أو كلمة المرور غير صحيحة!');
    }
  }
}
