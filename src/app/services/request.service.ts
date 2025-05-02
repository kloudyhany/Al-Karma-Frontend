import { Injectable } from '@angular/core';
import { Offer } from '../models/offer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private apiUrl = 'https://your-api.com/api/requests';  // عنوان الـ API الخاص بك

  constructor(private http: HttpClient) { }

  // ✅ الحصول على جميع الطلبات
  getMyRequests(): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.apiUrl}/my`);
  }

  // ✅ الحصول على طلب معين
  getRequestById(id: number): Observable<Offer> {
    return this.http.get<Offer>(`${this.apiUrl}/${id}`);
  }

  // ✅ إضافة طلب جديد
  createRequest(request: Offer): Observable<Offer> {
    return this.http.post<Offer>(`${this.apiUrl}/create`, request);
  }

  // ✅ تحديث الطلب
  updateRequest(id: number, request: Offer): Observable<Offer> {
    return this.http.put<Offer>(`${this.apiUrl}/update/${id}`, request);
  }

  // ✅ حذف الطلب
  deleteRequest(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
