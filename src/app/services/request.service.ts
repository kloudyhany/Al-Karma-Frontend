import { Service, Request } from './../models/offer';
import { Injectable } from '@angular/core';
import { Offer } from '../models/offer';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { Router } from '@angular/router';
import signalR from '@microsoft/signalr';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private apiUrl = 'https://localhost:7245/api/request'; 
  private hubApiUrl = 'https://localhost:7245/hubs/request'; 

  private connection = new signalR.HubConnectionBuilder()
        .withUrl(`${this.hubApiUrl}`, {
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
  
  
  constructor(private http: HttpClient,private router:Router) { }


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

  SendRequest(request: any): Observable<any>{
      return new Observable((observer) => {
        this.connection.invoke("CreateRequest", request).then((msg) => {
          observer.next(msg);
          observer.complete();
        });
      });
    }
    
  onRceiveNotification(): Observable<any> {
    return new Observable(observer => {
      this.connection.on("ReceiveNotification", (message) => {
      observer.next(message);
      });
    });
  }

  onReceiveRequest(): Observable<any> {
    return new Observable(observer => {
      this.connection.on("ReceiveRequest", (message) => {
        observer.next(message);
      });
    });
  }

  getRequestById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  getServiceTypeRequests(serviceType: number): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/serviceType/${serviceType}`)
  }

  //  حذف الطلب
  deleteRequest(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Client Requests not Recommended to use, 
  //ANCHOR -  use SendRequest instead
  createRequest(requestData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, requestData);
  }

  getClientRequests(id : number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/userId/${id}`);
  }

  // // Provider Offers
  // createOffer(offerData: any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/offers`, offerData);
  // }

  // getAvailableRequests(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/provider/requests`);
  // }

  // getProviderOffers(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/provider/offers`);
  // }

  // Offer Management
  // acceptOffer(offerId: string): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/offers/${offerId}/accept`, {});
  // }

  // rejectOffer(offerId: string): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/offers/${offerId}/reject`, {});
  // }

  // Ratings
  // addRating(ratingData: any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/ratings`, ratingData);
  // }
  // logout() {
  //   console.log('تسجيل الخروج...');
  //   localStorage.removeItem('token');
  //   this.router.navigate(['/login']);
  // }
}
