import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { OfferService } from '../services/offer.service'; // Adjust the import path as necessary
import { Offer } from '../models/offer'; // Adjust the import path as necessary
import { NgClass } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-offer-list',
  imports: [NgClass, CommonModule],
  standalone: true,
  templateUrl: './offer-list.component.html',
  styleUrl: './offer-list.component.css'
})
export class OfferListComponent implements OnInit {

    requestId: number = 0;
  offers: Offer[] = [];

  constructor(private offerService: OfferService) {}

  ngOnInit(): void {
    // جلب العروض المفتوحة بناءً على ID الطلب
    this.offerService.getOffersByRequest(this.requestId).subscribe((data) => {
      this.offers = data;
    });
  }


  respondToOffer(offerId: number, status: 'Accepted' | 'Rejected'): void {
    this.offerService.respondToOffer(offerId, 'Accepted').subscribe(
      (response) => {
        alert('تم قبول العرض');
        this.updateOfferState(offerId, true);
      },
      (error) => {
        alert('حدث خطأ أثناء قبول العرض');
      }
    );
  }

  private updateOfferState(offerId: number, isAccepted: boolean) {
    const offer = this.offers.find(o => o.id === offerId);
    if (offer) {
      offer.isAccepted = isAccepted;
      offer.isRejected = !isAccepted;
    }
  }

}
