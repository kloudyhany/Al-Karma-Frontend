import { Offer } from './../models/transaction';
import { Component, OnInit } from '@angular/core';
import { OfferService } from '../services/offer.service';
import { CommonModule } from '@angular/common';
import { OffersignalrService } from '../offersignalr.service';


@Component({
  selector: 'app-offers-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './offers-list.component.html',
  styleUrl: './offers-list.component.css'
})
export class OffersListComponent implements OnInit {
  offers: any[] = [];
  loading = false;

  constructor(private offersService: OfferService , private offersignalr : OffersignalrService) {}

  ngOnInit(): void {
    this.loadOffers();
    this.acceptOffer(1); // Pass a valid offerId as an argument
    this.completeOffer(1); 

  }
  completeOffer(offerId: number) {
    this.offersignalr.onOfferCompleted(offerId).subscribe({
      next: (response) => {
        console.log('Offer completed successfully:', response);
        this.offersignalr.receivereview() ;
  
      },
      error: (err) => {
        console.error('Error completing offer:', err);
      }
    });
  }
  acceptOffer(offerId: number) {
    this.offersignalr.onOfferAccepted(offerId).subscribe({
      next: (response) => {
        console.log('Offer accepted successfully:', response);
        alert('تم قبول العرض بنجاح!');
        
      },
      error: (err) => {
        console.error('Error accepting offer:', err);
      }
    });
  }
  canceloffer(offerid : number) {
   this.offersService.onOfferCanceled(offerid).subscribe({
      next: (response) => {
        console.log('Offer cancelled successfully:', response);
        this.loadOffers(); // Reload offers after cancellation
      },
      error: (err) => {
        console.error('Error cancelling offer:', err);
      }
    });
  }

  loadOffers() {
    
    
    const savedRequest = localStorage.getItem('savedRequest');
    if (savedRequest) {
      const request = JSON.parse(savedRequest);
      console.log('Loaded request:', request);
    }
    this.loading = true;
    const technicianId = 'someTechnicianId'; 
    this.offersService.getMyOffers(technicianId).subscribe({
      next: (data) => {
        this.offers = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }
  getStatusLabel(status: string): string {
    const statusLabels: { [key: string]: string } = {
      active: 'نشط',
      expired: 'منتهي',
      pending: 'قيد الانتظار'
    };
    return statusLabels[status] || 'غير معروف';
  }
  goBackToProfile() {
    window.history.back(); 
  }

}
