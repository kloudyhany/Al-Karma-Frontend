import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private baseUrl = 'https://your-api-url.com/api/ratings';

  constructor(private http: HttpClient) {}

  submitRatings(payload: any) {
    return this.http.post(`${this.baseUrl}/submit`, payload);
  }
}
