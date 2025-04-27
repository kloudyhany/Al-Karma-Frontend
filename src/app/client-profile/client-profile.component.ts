import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loadStripe } from '@stripe/stripe-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-profile',
  imports: [CommonModule],
  templateUrl: './client-profile.component.html',
  
  styleUrl: './client-profile.component.css'
})
export class ClientProfileComponent {
  private router = inject(Router);
  async makePayment() {
    const stripe = await loadStripe('your-publishable-key-here'); // Replace with your Stripe publishable key

    if (!stripe) {
      console.error('Stripe failed to load.');
      return;
    }

    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        { price: 'price_1Hh1Y2IyNTgGDV2kX9eX9eX9', quantity: 1 } // Replace with your price ID
      ],
      mode: 'payment',
      successUrl: window.location.origin + '/success',
      cancelUrl: window.location.origin + '/cancel',
    });

    if (error) {
      console.error('Payment error:', error.message);
    }
  }
  redirectToPayment() {

    this.makePayment();
    this.router.navigate(['/Transactions']);

  }
  
}

 

   



