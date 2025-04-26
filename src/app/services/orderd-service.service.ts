import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../models/offer';

@Injectable({
  providedIn: 'root'
})
export class OrderdServiceService {

  constructor(private http: HttpClient) { }
  // العروض الخاصة بالخدمة
  // هنا نستخدم http.get لجلب العروض الخاصة بالخدمة من API
  getServiceById(id: number): Observable<Offer[]> {
    return this.http.get<Offer[]>(`https://your-api-url/api/services/${id}/offers`);
  }
  getmyOrders(): Observable<any[]> {
    return this.http.get<any[]>(`https://your-api-url/api/orders/myOrders`);
  }
  getMyOrdersById(id: number): Observable<any[]> {
    return this.http.get<any[]>(`https://your-api-url/api/orders/${id}`);
  }
}
