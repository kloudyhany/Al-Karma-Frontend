import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { loginservice } from './loginservice';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SharedDataService } from '../shared-data-service.service';

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
  /**
   * The reactive form group for the login form.
   */
  loginForm!: FormGroup;

  /**
   * Initializes the login component with necessary dependencies.
   * 
   * @param fb - The `FormBuilder` service for creating reactive forms.
   * @param loginService - The service responsible for handling login-related operations.
   * @param router - The Angular `Router` service for navigation.
   */
  constructor(
    private fb: FormBuilder,
    private loginService: loginservice,
    private router: Router
  ) {}

  /**
   * Lifecycle hook that initializes the login form with validation rules.
   */
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

  /**
   * Getter for accessing the form controls of the login form.
   * 
   * @returns The controls of the login form.
   */
  get FormControls() {
    return this.loginForm.controls;
  }

  /**
   * Handles the form submission for user login.
   * 
   * - Validates the form and ensures all fields are filled.
   * - Reads user data from `localStorage` and compares it with the entered credentials.
   * - Sets a cookie with the user data upon successful login.
   * - Navigates to the appropriate profile page based on the user's role.
   * 
   * @remarks
   * - Displays an alert if the form is invalid or if the credentials do not match.
   * - Supports roles: "عميل" (Client), "فني" (Technician), and "ادمن" (Admin).
   */
  onSubmit(): void {
    if (this.loginForm.invalid) {
      
      this.loginForm.markAllAsTouched();
      alert('يرجى تعبئة جميع الحقول.');
      return;
    }

    const storedData = localStorage.getItem('userData');
    if (!storedData) {
      alert('لا توجد بيانات مسجلة!');
      return;
    }

    const formData = JSON.parse(storedData);
    const { email, password } = this.loginForm.value;

    if (email === formData.email && password === formData.password) {
      alert('تم تسجيل الدخول بنجاح!');
      document.cookie = `formData=${encodeURIComponent(JSON.stringify(formData))}; path=/;`;

      const userRole = formData.serviceType;

      if (userRole === 'عميل') {
        this.router.navigate(['/clientprofile']);
      } else if (userRole === 'فني') {
        this.router.navigate(['/techprofile']);
      }  else {
        alert('دور غير معروف');
      }
    } else {
      alert('البريد الإلكتروني أو كلمة المرور غير صحيحة!');
    }
  }
  
  
}
