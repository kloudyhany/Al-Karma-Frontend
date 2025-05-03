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
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
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

    this.loginService.login(this.loginForm.value).subscribe({
      next: (response) => {
        alert('تم تسجيل الدخول بنجاح!');
        if (response.role === 'admin') {
          this.router.navigate(['/admin']);
        } 
        else if  (response.role === 'client') {
          this.router.navigate(['/clientprofile']);
        }
        else if (response.role === 'technician') {
        this.router.navigate(['/technicianprofile']);
        }
      },
      error: (error) => {
        alert('فشل تسجيل الدخول. تأكد من البيانات.');
      },
    });
  }
}
