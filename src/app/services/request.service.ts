import { Injectable } from '@angular/core';
import { Offer } from '../models/offer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private apiUrl = 'https://localhost:7245/api/Request'; 
  // private baseUrl = 'https://localhost:7245/api'; // Add base URL for other endpoints

  constructor(private http: HttpClient,private router:Router) { }

  // //  الحصول على جميع الطلبات
  // getMyRequests(): Observable<Offer[]> {
  //   return this.http.get<Offer[]>(`${this.apiUrl}/my`);
  // }

  getRequestById(id: number): Observable<Offer> {
    return this.http.get<Offer>(`${this.apiUrl}/${id}`);
  }
  

  // //  إضافة طلب جديد
  // createRequest(request: Offer): Observable<Offer> {
  //   return this.http.post<Offer>(`${this.apiUrl}/create`, request);
  // }

  // //  تحديث الطلب
  // updateRequest(id: number, request: Offer): Observable<Offer> {
  //   return this.http.put<Offer>(`${this.apiUrl}/update/${id}`, request);
  // }


  //  حذف الطلب
  deleteRequest(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
  // //  قبول الطلب (تحديث حالة الطلب إلى مكتمل أو مرفوض)
  // updateRequestStatus(id: number, status: 'completed' | 'rejected'): Observable<void> {
  //   return this.http.put<void>(`${this.apiUrl}/status/${id}`, { status });
  // }
  // acceptRequest(id: number, status: string): Observable<void> {
  //   return this.http.put<void>(`${this.apiUrl}/accept/${id}`, { status });
  // }
  
  // Client Requests
  createRequest(requestData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/requests`, requestData);
  }

  getClientRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/client/requests`);
  }

  // Provider Offers
  createOffer(offerData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/offers`, offerData);
  }

  getAvailableRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/provider/requests`);
  }

  getProviderOffers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/provider/offers`);
  }

  // Offer Management
  acceptOffer(offerId: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/offers/${offerId}/accept`, {});
  }

  rejectOffer(offerId: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/offers/${offerId}/reject`, {});
  }

  // Ratings
  addRating(ratingData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/ratings`, ratingData);
  }
  logout() {
    console.log('تسجيل الخروج...');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
