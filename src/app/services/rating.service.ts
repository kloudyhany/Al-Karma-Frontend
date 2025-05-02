import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private baseUrl = 'https://your-api-url/api/ratings';

  constructor(private http: HttpClient) {}

  submitRating(data: { targetId: number; type: 'client' | 'technician'; stars: number; comment: string }) {
    return this.http.post(`https://your-api-url/api/ratings`, data);
  }



  rateClient(data: { clientId: number; stars: number; comment: string }) {
    return this.http.post(`https://your-api-url/api/ratings/client`, data);
  }
  }
