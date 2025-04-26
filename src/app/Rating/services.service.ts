import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private baseUrl = 'apiiiiiiiiiiiiiiii heeeeeeeeeeeeeer';

  constructor(private http: HttpClient) {}

  submitRatings(payload: any) {
    return this.http.post(`${this.baseUrl}/submit`, payload);
  }
}
