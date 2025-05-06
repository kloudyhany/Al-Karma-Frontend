import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:7245/Auth';  // Replace with your actual API URL
  private authTokenKey = 'auth_token';
  private userRoleKey = 'user_role';

  constructor(private http: HttpClient) { }

  // Login request
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password });
  }

 

  // Set authentication token
  setAuthToken(token: string): void {
    localStorage.setItem(this.authTokenKey, token);
  }

  getUser() {
    // Mock implementation, replace with actual logic
    return { name: 'Technician Name', id: 123 };
  }
  // Get authentication token
  getAuthToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }

  // Remove authentication data
  logout(): void {
    localStorage.removeItem(this.authTokenKey);
    localStorage.removeItem(this.userRoleKey);
  }

  getUserRole(): 'فني' | 'عميل' | 'مزود خدمة' | 'ادمن' {
    const role = localStorage.getItem('userRole');
    return (role as any) || 'عميل'; // القيمة الافتراضية "عميل"
  }

  // حفظ الدور بعد تسجيل الدخول (اختياري)
  setUserRole(role: 'فني' | 'عميل' | 'مزود خدمة' | 'ادمن'): void {
    localStorage.setItem('userRole', role);
  }

  // حذف الدور عند تسجيل الخروج
  clearUserRole(): void {
    localStorage.removeItem('userRole');
  }
}
