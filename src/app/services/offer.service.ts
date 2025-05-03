import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from '../models/offer';


@Injectable({
  providedIn: 'root'
})
export class OfferService {
  /**
   * Base URL for the offers API.
   * @private
   */
  private baseUrl = 'https://localhost:7245/api/Offer'; 

  constructor(private http: HttpClient) { }

  //post
  submitOffer(offer: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, offer);
  }
  getOffersForRequest(requestId: number): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.baseUrl}/by-request/${requestId}`);
  }

  getMyOffers(technicianId: string): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.baseUrl}/by-technician/${technicianId}`);
  }

  respondToOffer(offerId: number, status: 'Accepted' | 'Rejected'): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${offerId}/status`, { status });
  }

  getOffersByRequest(requestId: number): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.baseUrl}/${requestId}`);
  }
}
