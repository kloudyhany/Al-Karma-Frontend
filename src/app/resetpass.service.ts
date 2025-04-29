import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetpassService {
  
  private apiUrl = 'https://your-api-url.com/api'; // Replace with your real API base URL

  constructor(private http: HttpClient) {}

  sendResetCode(phone: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/send-reset-code`, { phone });
  }

  resendResetCode(phone: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/resend-reset-code`, { phone });
  }

  verifyResetCode(phone: string, code: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/verify-reset-code`, { phone, code });
  }
}
