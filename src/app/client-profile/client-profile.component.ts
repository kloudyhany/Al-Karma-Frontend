import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loadStripe } from '@stripe/stripe-js';   // Import Stripe.js
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-profile',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl:'./client-profile.component.html',
  
  styleUrl: './client-profile.component.css'
})
export class ClientProfileComponent {
  // private router = inject(Router);
  // async makePayment() {
  //   const stripe = await loadStripe('your-publishable-key-here'); // Replace with your Stripe publishable key

  //   if (!stripe) {
  //     console.error('Stripe failed to load.');
  //     return;
  //   }

  //   const { error } = await stripe.redirectToCheckout({
  //     lineItems: [
  //       { price: 'price_1Hh1Y2IyNTgGDV2kX9eX9eX9', quantity: 1 } // Replace with your price ID
  //     ],
  //     mode: 'payment',
  //     successUrl: window.location.origin + '/success',
  //     cancelUrl: window.location.origin + '/cancel',
  //   });

  //   if (error) {
  //     console.error('Payment error:', error.message);
  //   }
  // }
  // redirectToOfferList(): void {
  //   console.log('Redirecting to the offer list...');
  //   this.router.navigate(['/requests']); // Redirect to the offer list page
  // }
  // pay(): void {
  //   console.log('Payment button clicked!');
  //   this.makePayment(); // Call the payment function here
  
  //   this.router.navigate(['/transactions']); // Redirect to the transactions page after payment
    
  // }


  user = {
    name: 'أحمد محمد',
    phone: '0123456789',
    email: 'ahmed@example.com',
    image: 'assets/default-avatar.png'
  };

  currentPassword = '';
  newPassword = '';

  selectedFile: File | null = null;
  imageError = '';

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.imageError = '';

    if (file) {
      const isValidType = ['image/jpeg', 'image/png'].includes(file.type);
      const isValidSize = file.size <= 5 * 1024 * 1024;

      if (!isValidType) {
        this.imageError = 'الملف يجب أن يكون بصيغة JPG أو PNG فقط.';
        return;
      }

      if (!isValidSize) {
        this.imageError = 'أقصى حجم للصورة هو 5 ميجا.';
        return;
      }

      this.selectedFile = file;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.user.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  saveProfile() {
    console.log('✅ حفظ البيانات:', this.user);
    // TODO: Call service to update profile
  }

  changePassword() {
    console.log('🔒 تغيير كلمة المرور:', this.currentPassword, this.newPassword);
    // TODO: Call service to change password
  }
}

 

   



