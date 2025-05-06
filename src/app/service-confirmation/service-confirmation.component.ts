import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule , FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { OffersignalrService } from '../offersignalr.service';

@Component({
  selector: 'app-service-confirmation',
  imports: [ReactiveFormsModule , CommonModule, FormsModule],
  templateUrl: './service-confirmation.component.html',
  styleUrl: './service-confirmation.component.css'
})
export class ServiceConfirmationComponent {
  
  constructor(private fb:FormBuilder , private offersignalrService: OffersignalrService) { 
  }

  serviceform !: FormGroup ;

  ngOnInit(): void {
    this.offersignalrService.connectionstart();
    this.serviceform = new FormGroup({
      servicename: new FormControl('', Validators.required), 
      servicecost: new FormControl('', Validators.required),
      servicedate: new FormControl('', Validators.required),
      servicetime: new FormControl('', Validators.required)
    });
  }
  get FormControls(): any {
    return this.serviceform.controls;
  }

  onSubmit(): void {
    if ( this.serviceform.invalid) {
      this.serviceform.markAllAsTouched();
      alert('يرجى تعبئة جميع الحقول المطلوبة.');
      return;
    }
    else {
      this.offersignalrService.sendMessage();
      
    }
  }
}
