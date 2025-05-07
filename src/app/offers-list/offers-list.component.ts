import { Component, OnInit } from '@angular/core';
import { OfferService } from '../services/offer.service';
import { CommonModule } from '@angular/common';



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

  constructor(private offersService: OfferService) {}

  ngOnInit(): void {
    this.loadOffers();
  }

  loadOffers() {
    if (this.offers.length > 0) {

    
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
  else{alert("لا توجد طلبات بعد");

    window.history.back();

  } 

    }
  getStatusLabel(status: string): string {
    const statusLabels: { [key: string]: string } = {
      active: 'نشط',
      expired: 'منتهي',
      pending: 'قيد الانتظار'
    };
    return statusLabels[status] || 'غير معروف';
  }
  BackToProfile() {
    window.history.back(); // Go back to the previous page  
  }

}
