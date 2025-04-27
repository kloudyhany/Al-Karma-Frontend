import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from '../models/offer'; // Adjust the import path as necessary


@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/posts'; // Fake API for testing
  constructor(private http:HttpClient) { }
  getOffers(taskId: number): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.baseUrl}?taskId=${taskId}`);
  }

  acceptOffer(offerId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/${offerId}/accept`, {});
  }

  rejectOffer(offerId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/${offerId}/reject`, {});
  }
}
