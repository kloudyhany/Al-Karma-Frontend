import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-client-profile',
  imports: [CommonModule],
  templateUrl: './client-profile.component.html',
  
  styleUrl: './client-profile.component.css'
})
export class ClientProfileComponent  {
  async pay() {
   const stripe = await loadStripe('pk_test_YOUR_PUBLIC_KEY');

    const { error } = await stripe!.redirectToCheckout({
      lineItems: [{ price: 'price_1YOUR_PRICE_ID', quantity: 1 }],
      mode: 'payment',
      successUrl: 'https://your-site.com/success',
      cancelUrl: 'https://your-site.com/cancel',
    });

    if (error) {
      console.error('Payment error:', error);
    }
  }
}

