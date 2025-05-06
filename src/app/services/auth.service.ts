import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:7245/Auth';  // URL of your API
  private authTokenKey = 'auth_token';
  private userRoleKey = 'user_role';

  constructor(private http: HttpClient) { }

  // Login request
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password });
  }
  updatePassword(username: string, oldPassword: string, newPassword: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/updatePassword`, { username, oldPassword, newPassword });
  }
  // Register request
  register(username: string, password: string, email: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { username, password, email });
  }
  GetRefreshToken(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/GetRefreshToken`, { username, password });
  }
  // Verify token request
  RevokeRefreshToken(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/RevokeRefreshToken`, { username, password });
  }
  GenerateRefreshToken(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/GenerateRefreshToken`, { username, password });
  }

  // Remove authentication data
  // logout(): void {
  //   localStorage.removeItem(this.authTokenKey);
  //   localStorage.removeItem(this.userRoleKey);
  // }

  getUserRole(): 'فني' | 'عميل' | 'مزود خدمة' | 'ادمن' {
    const role = localStorage.getItem('userRole');
    return (role as any) || 'عميل'; // القيمة الافتراضية "عميل"
  }

  // حفظ الدور بعد تسجيل الدخول (اختياري)
  setUserRole(role: 'فني' | 'عميل' | 'مزود خدمة' | 'ادمن'): void {
    localStorage.setItem('userRole', role);
  }

  // حذف الدور عند تسجيل الخروج
  // clearUserRole(): void {
  //   localStorage.removeItem('userRole');
  // }
}
