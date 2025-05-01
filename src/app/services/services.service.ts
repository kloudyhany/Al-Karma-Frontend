import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../models/offer';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private baseUrl = 'https://localhost:5001/api/requests'; //apiiiiiiiiiii hereeeeeeeee

  constructor(private http: HttpClient) {}

  createRequest(data: any) {
    return this.http.post(`${this.baseUrl}`, data);
  }

  getMyRequests(clientId: string) {
    return this.http.get<ServicesService[]>(`${this.baseUrl}/by-client/${clientId}`);
  }

  getAvailableRequests() {
    return this.http.get<ServicesService[]>(`${this.baseUrl}/open`);
  }
}
