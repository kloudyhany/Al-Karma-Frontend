import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from '../models/offer'; // Adjust the import path as necessary


@Injectable({
  providedIn: 'root'
})
/**
 * Service for managing offers in the application.
 * Provides methods to submit offers, retrieve offers, and respond to offers.
 */
export class OfferService {
  /**
   * Base URL for the offers API.
   * @private
   */
  private baseUrl = 'https://localhost:7245/api/Offer'; // Adjust the base URL as necessary

  /**
   * Constructor for the OfferService.
   * @param http - The HttpClient instance used for making HTTP requests.
   */
  constructor(private http: HttpClient) {}

  /**
   * Submits a new offer.
   * @param offer - The offer data to be submitted.
   * @returns An Observable of the HTTP POST response.
   */
  submitOffer(offer: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, offer);
  }

  /**
   * Retrieves all offers associated with a specific request.
   * @param requestId - The ID of the request for which offers are to be retrieved.
   * @returns An Observable containing an array of offers.
   */
  getOffersForRequest(requestId: number): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.baseUrl}/by-request/${requestId}`);
  }

  /**
   * Retrieves all offers submitted by a specific technician.
   * @param technicianId - The ID of the technician whose offers are to be retrieved.
   * @returns An Observable containing an array of offers.
   */
  getMyOffers(technicianId: string): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.baseUrl}/by-technician/${technicianId}`);
  }

  /**
   * Responds to an offer by updating its status.
   * @param offerId - The ID of the offer to respond to.
   * @param status - The new status of the offer ('Accepted' or 'Rejected').
   * @returns An Observable of the HTTP PATCH response.
   */
  respondToOffer(offerId: number, status: 'Accepted' | 'Rejected'): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${offerId}/status`, { status });
  }

  /**
   * Retrieves all offers submitted for a specific request.
   * @param requestId - The ID of the request for which offers are to be retrieved.
   * @returns An Observable containing an array of offers.
   */
  getOffersByRequest(requestId: number): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.baseUrl}/${requestId}`);
  }
}
