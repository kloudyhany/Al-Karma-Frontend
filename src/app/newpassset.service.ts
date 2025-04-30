import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewpasssetService {
  private apiUrl = 'https://your-api-url.com/api/auth/reset-password'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  resetPassword(password: string): Observable<any> {
    const body = { password };
    return this.http.post(this.apiUrl, body);
  }
}
