import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private apiUrl = 'https://your-api-url/api/ratings'; // <-- عدّل الرابط حسب السيرفر

  constructor(private http: HttpClient) {}

  // تقييم العميل من قبل الفني
  rateClient(rating: { technicianId: number; clientId: number; stars: number; comment: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/rate-client`, rating);
  }

  // تقييم الفني من قبل العميل
  rateTechnician(rating: { clientId: number; technicianId: number; stars: number; comment: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/rate-technician`, rating);
  }

  // جلب تقييمات العميل
  getClientRatings(clientId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/client/${clientId}/ratings`);
  }

  // جلب تقييمات الفني
  getTechnicianRatings(technicianId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/technician/${technicianId}/ratings`);
  }

  // متوسط تقييمات العميل
  getClientAverageRating(clientId: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/client/${clientId}/average-rating`);
  }

  // متوسط تقييمات الفني
  getTechnicianAverageRating(technicianId: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/technician/${technicianId}/average-rating`);
  }
  }
