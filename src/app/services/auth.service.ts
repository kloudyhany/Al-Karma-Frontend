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

  // Get authentication token
  getAuthToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }

  // Remove authentication data
  logout(): void {
    localStorage.removeItem(this.authTokenKey);
    localStorage.removeItem(this.userRoleKey);
  }

  // Set user role
  setUserRole(role: 'client' | 'technician'): void {
    localStorage.setItem(this.userRoleKey, role);
  }

  // Get user role
  getUserRole(): 'client' | 'technician' | null {
    const role = localStorage.getItem(this.userRoleKey);
    if (role === 'client' || role === 'technician') {
      return role;
    }
    return null;
  }

  // Safe fallback getter
  getCurrentUserRole(): 'client' | 'technician' {
    return this.getUserRole() || 'client'; // default to 'client' if not set
  }

  // Dummy method - replace with real user info logic if needed
  getUser() {
    return { name: 'John Doe', id: 1 }; // You may call /me endpoint here
  }
}
