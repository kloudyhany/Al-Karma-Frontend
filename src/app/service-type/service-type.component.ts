import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-service-type',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './service-type.component.html',
  styleUrl: './service-type.component.css'
})
export class ServiceTypeComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      serviceType: ['', Validators.required] 
    });
  }

  get serviceType() {
    return this.registrationForm.get('serviceType');
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const serviceType = this.registrationForm.value.serviceType;
      // Redirect based on the selected service type
      if (serviceType === 'عميل') {
        this.router.navigate(['/client']); //  "عميل"
      } else if (serviceType === 'فني') {
        this.router.navigate(['techinical']); // "فني"
      } else if (serviceType === 'مزود خدمة') {
        this.router.navigate(['/supplier']); //  "مزود خدمة"
      } else if (serviceType === 'ادمن') {
        this.router.navigate(['/admin-registration']); //  "ادمن"
      }
    }
  }

}
