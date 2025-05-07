import { Component, Inject, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 
import { ReqsignalrService } from '../reqsignalr.service';

@Component({
  selector: 'app-request-form',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './request-form.component.html',
  styleUrl: './request-form.component.css'
})
export class RequestFormComponent implements OnInit {
  constructor(private http: HttpClient, private fb: FormBuilder, private reqsignalrService: ReqsignalrService) {

  }
  private router = inject(Router);
  request = {
    serviceType: '',
    description: '',
    location: '',
    serviceTime: ''
  };

  ngOnInit(): void {
    this.reqsignalrService.connectionstart(); 
  }

  // onFileSelected(event: any) {
    
  // }

  onSubmit() {
    const formData = new FormData();
    formData.append('serviceType', this.request.serviceType);
    formData.append('description', this.request.description);
    formData.append('location', this.request.location);
    formData.append('serviceTime', this.request.serviceTime);
    const clientId = 'someClientIdValue'; 
    localStorage.setItem('clientId', clientId);
    if (clientId) {
      formData.append('clientId', clientId);
    }

    this.http.post('/api/requests', formData).subscribe(response => {
      console.log('Request saved successfully:', response);
    }, error => {
      console.error('Error saving request:', error);
    });
    this.router.navigate(['/myrequests']); 
    console.log(this.request);
    localStorage.setItem('requestData', JSON.stringify(this.request));
    this.reqsignalrService.sendMessage(); 

    this.reqsignalrService.onreceiveOffer(); 
  }
}
