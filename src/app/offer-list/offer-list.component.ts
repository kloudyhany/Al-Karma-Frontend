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

  offers: Offer[] = [];
  taskId = 6; // Example, you should get this from route param or input

  constructor(private offerService: OfferService) {}

  ngOnInit(): void {
    this.loadOffers();
  }

  loadOffers() {
    this.offerService.getOffers(this.taskId).subscribe(data => {
      this.offers = data;
    });
  }

  acceptOffer(offerId: number) {
    this.offerService.acceptOffer(offerId).subscribe(() => {
      this.loadOffers(); // Refresh the list
    });
  }

  rejectOffer(offerId: number) {
    this.offerService.rejectOffer(offerId).subscribe(() => {
      this.loadOffers(); // Refresh the list
    });
  }

}
