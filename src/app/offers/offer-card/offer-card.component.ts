import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Offer } from '../../models/model'; 

@Component({
  selector: 'app-offer-card',
  imports: [],
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.css'
})
export class OfferCardComponent {
  @Input() offer!: Offer;

  acceptOffer() {
    console.log('Offer accepted:', this.offer);
    //  call API
  }

  rejectOffer() {
    console.log('Offer rejected:', this.offer);
    //  call API
  }

}
