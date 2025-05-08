import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private baseUrl = 'https://localhost:7245/hubs/review'; 
  private controllerBaseUrl = 'https://localhost:7245/api/review';
  private SPControllerBaseUrl = 'https://localhost:7245/api/serviceProviderReview';
  private connection = new signalR.HubConnectionBuilder()
      .withUrl(`${this.baseUrl}`, {
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

  constructor(private http: HttpClient) {}

  getClientReviews(ClientId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.controllerBaseUrl}/${ClientId}`);
  }

  getServiceProviderReviews(SPID: string): Observable<any[]>{
    return this.http.get<any[]>(`${this.SPControllerBaseUrl}/${SPID}`)
  }
  
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

  // review client
  reviewClient(review: any): void {
    this.connection.invoke("ReviewClient", review).then(() => {
      console.log("Review sent successfully");
    });
  }

  // review service provider
  reviewServiceProvider(review: any): void{
    this.connection.invoke("ReviewServiceProvider", review).then(() => {
      console.log("Review sent successfully");
    })
  }

  onRceiveNotification(): Observable<any> {
    return new Observable(observer => {
      this.connection.on("ReceiveNotification", (message) => {
      observer.next(message);
      });
    });
  }
  // subscribe and receive rating
  receiveRating(): Observable<any> {
    if (!this.connection) {
      throw new Error('Connection is not initialized');
    }
    return new Observable<any>(observer => {
      this.connection.on("ReceiveReview", (message: any) => {
        console.log("Received message from server:", message);
        observer.next(message);
      });
    });
  }
}
