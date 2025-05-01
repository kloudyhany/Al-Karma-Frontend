import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-client-service',
  imports: [CommonModule,FormsModule],
  templateUrl: './client-service.component.html',
  styleUrl: './client-service.component.css'
})
export class ClientServiceComponent {
  messageData = {
    phoneNumber: '',
    message: ''
  };

  sendMessage() {
    const phoneNumber = this.messageData.phoneNumber;
    const message = this.messageData.message;

    // WhatsApp API URL
    const whatsappAPIUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new window
    window.open(whatsappAPIUrl, '_blank');
  }

}
