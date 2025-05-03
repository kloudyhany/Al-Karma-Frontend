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
export class loginComponent {
  loginForm!: FormGroup;
  serviceType:string | null = null;
  constructor(
    private fb: FormBuilder,
    private loginService: loginservice,
    private router: Router,
    private authService : AuthService,
    private sharedData : SharedDataService
  ) { }

  ngOnInit(): void {
    const savedRegistrationData = localStorage.getItem('userData');
    const parsedData = savedRegistrationData ? JSON.parse(savedRegistrationData) : null;

    this.loginForm = this.fb.group({
      email: ['', [Validators.required,  Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
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
    const data = this.sharedData.getRegistrationData();
    if (data && data.serviceType) {
      this.serviceType = data.serviceType;

      // Example condition
      if (this.serviceType === 'فني') {
        this.router.navigate(['/techprofile']);
      } else if (this.serviceType === 'عميل') {
        this.router.navigate(['/clientprofile']);
      }else {
      this.router.navigate(['/']);
      }}

  //   this.authService.login(this.loginForm.value).subscribe({
  //     next: (userData) => {
  //       console.log(userData);
        
  //       alert('تم تسجيل الدخول بنجاح!');
  //       if (userData.role === 'admin') {
  //         this.router.navigate(['/admin']);
  //       } 
  //       else if  (userData.role === 'client') {
  //         this.router.navigate(['/clientprofile']);
  //       }
  //       else if (userData.role === 'technician') {
  //       this.router.navigate(['/technicianprofile']);
  //       }
  //     },
  //     error: (error) => {
  //       alert('فشل تسجيل الدخول. تأكد من البيانات.');
  //     },
  //   });
  }
}
