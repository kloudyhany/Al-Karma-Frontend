import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RatingRequest } from '../models/offer';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private baseUrl = 'https://localhost:7245/hubs/review'; // غيّرها حسب عنوان API الفعلي

  constructor(private http: HttpClient) {}

  //signalR

  // reveiwClient(clientReview: any): Observable<any>{
  //   return
  // }



  // submitRating(payload: RatingRequest): Observable<any> {
  //   return this.http.post(this.baseUrl, payload);
  // }
}
