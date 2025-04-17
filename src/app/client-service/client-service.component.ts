import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-client-service',
  imports: [CommonModule, BrowserModule, FormsModule],
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
