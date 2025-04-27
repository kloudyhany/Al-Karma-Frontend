import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loadStripe } from '@stripe/stripe-js';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { ServiceConfirmationComponent } from '../service-confirmation/service-confirmation.component';


@Component({
  selector: 'app-client-profile',
  imports: [CommonModule , ServiceConfirmationComponent],
  templateUrl: './client-profile.component.html',
  
  styleUrl: './client-profile.component.css'
})
export class ClientProfileComponent  {

  constructor(private router: Router) { }

  async pay() {
   const stripe = await loadStripe('pk_test_YOUR_PUBLIC_KEY');
=======

@Component({
  selector: 'app-client-profile',
  imports: [CommonModule],
  standalone: true,
  templateUrl:'./client-profile.component.html',
  
  styleUrl: './client-profile.component.css'
})
export class ClientProfileComponent {
  private router = inject(Router);
  async makePayment() {
    const stripe = await loadStripe('your-publishable-key-here'); // Replace with your Stripe publishable key
>>>>>>> 255ed4782d2b45afa200eba291b99a9c65217984

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
<<<<<<< HEAD
  ordering(){
    console.log("Ordering...");
    this.router.navigate(['/service-confirmation']);
  }
=======
  redirectToOfferList(): void {
    console.log('Redirecting to the offer list...');
    this.router.navigate(['/offers']); 
  }
  pay(): void {
    console.log('Payment button clicked!');
    this.makePayment(); // Call the payment function here
  
    this.router.navigate(['/transactions']); // Redirect to the transactions page after payment
    
  }

>>>>>>> 255ed4782d2b45afa200eba291b99a9c65217984
}

 

   



