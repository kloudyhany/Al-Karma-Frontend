import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from '../models/offer';
import signalR from '@microsoft/signalr';


@Injectable({
  providedIn: 'root'
})
export class OfferService {
  /**
   * Base URL for the offers API.
   * @private
  */
  
  constructor(private http: HttpClient) { }

  private baseUrl = 'https://localhost:7245/api/Offer';
  private hubBaseUrl = 'https://localhost:7245/hubs/offer'
  
  private connection = new signalR.HubConnectionBuilder()
        .withUrl(`${this.hubBaseUrl}`, {
            accessTokenFactory: () => {
              const backData = localStorage.getItem("BackData");
              return backData ? JSON.parse(backData).value.token : '';
            },
            transport: signalR.HttpTransportType.WebSockets,
            withCredentials: false,
          })
          .configureLogging(signalR.LogLevel.Information)
          .withAutomaticReconnect()
          .build();
  
  // connection start
  connectionStart(): void {   
    this.connection
      .start()
      .then(() => {
        console.log("✅ Connected to SignalR hub");
      })
      .catch((err) => {
        console.error("❌ Connection failed:", err);
      });
  }


  onSendOffer(offer: any): void {
    this.connection.invoke("CreateOffer", offer).then(() => {
      console.log("Offer sent successfully");
    });
  }

  onServiceCompleted(offerId: number): void {
    this.connection.invoke("OfferAccepted", offerId).then(() => {
      console.log("Service Completed successfully");
    });
  }
  
  onOfferAccepted(offerId: number): void {
    this.connection.invoke("OfferAccepted", offerId).then(() => {
      console.log("Service Completed successfully");
    });
  }

  onOfferCanceled(offerId : number): void {
      this.connection.invoke("OfferCanceled", offerId).then(() => {
      console.log("The sender cancel the current offer ");
    });
  }
  onRceiveNotification(): Observable<any> {
    return new Observable(observer => {
      this.connection.on("ReceiveNotification", (message) => {
        observer.next(message);
      });
    });
  }

  onReceiveOffer(): Observable<any>{
    return new Observable(observer => {
      this.connection.on("ReceiveOffer", (request) => {
        observer.next(request);
      });
    });
  }

  //post for controller
  submitOffer(offer: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, offer);
  }

  getOffersForRequest(requestId: number): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.baseUrl}/request/${requestId}`);
  }

  getMyOffers(technicianId: string): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.baseUrl}/serviceprovider/${technicianId}`);
  }
  // signalR method
  respondToOffer(offerId: number, status: 'Accepted' | 'Rejected'): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${offerId}/status`, { status });
  }

  getOffersById(offerId: number): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.baseUrl}/${offerId}`);
  }
}
