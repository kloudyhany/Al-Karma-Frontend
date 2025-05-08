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
        try {
          // Try to parse if response is string
          const response = typeof res === 'string' ? JSON.parse(res) : res;
          
          const token = response.value?.token;
          const user = response.value?.userName;
          
          if (token && user) {
            localStorage.setItem('BackData', JSON.stringify(res));
  
        
  
            // Note: Fixed accessing role - was trying to access user.value.role
            // but user is already the userName from response
            // You might need to adjust this based on actual response structure


            const role = response.value?.role; 

            //const IsServiceProvider = response.value?.serviceProvider;
  
            if (role === 'User') {
              this.router.navigate(['/clientprofile']);
            } else if (role === 'Technician') {
              this.router.navigate(['/techprofile']);
            } 
            // else if (role === 'ادمن') {
            //   this.router.navigate(['/admin']);
            // } 
            else {
              alert('دور غير معروف!');
            }
          } else {
            alert('الاستجابة غير صحيحة من الخادم.');
          }
        } catch (e) {
          console.error('Parsing error:', e);
          alert('خطأ في معالجة استجابة الخادم');
        }
      },
      error: (err) => {
        console.error('Full error:', err);
        if (err.error instanceof Error) {
          alert(`Network error: ${err.error.message}`);
        } else {
          // Handle cases where error might be string
          const errorMsg = typeof err.error === 'string' ? err.error : 
                    err.message || 'حدث خطأ غير معروف';
          alert(`Server error: ${err.status} - ${errorMsg}`);
        }
      }
    });
  }
  
  
}
