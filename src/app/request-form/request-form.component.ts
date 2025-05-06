import { Component, Inject, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Import Router
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
    image: null,
    voice: null,
    location: '',
    serviceTime: ''
  };

  ngOnInit(): void {
    this.reqsignalrService.connectionstart(); // Start the SignalR connection
  }

  onFileSelected(event: any) {
    this.request.image = event.target.files[0];
  }

  onSubmit() {
    this.router.navigate(['/offers']); // Redirect to the transactions page after payment
    console.log(this.request);
    localStorage.setItem('requestData', JSON.stringify(this.request));
    this.reqsignalrService.sendMessage(); // Call the sendMessage method from the service
    this.reqsignalrService.onreceiveOffer(); // Call the onreceiveOffer method from the service
  }
}
