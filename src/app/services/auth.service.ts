import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:7245/Auth';  // Replace with your API URL
  private authTokenKey = 'auth_token';
  private userRoleKey = 'user_role';

  constructor(private http:HttpClient) { }
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, { username, password });
  }
  // Store authentication token
  setAuthToken(token: string): void {
    localStorage.setItem(this.authTokenKey, token);
  }
  // Get authentication token
  // Store user role
  setUserRole(role: string): void {
    localStorage.setItem(this.userRoleKey, role);
  }
   // Get user role
   getUserRole(): string | null {
    return localStorage.getItem(this.userRoleKey);
  }
  getUser() {
    // Mock implementation, replace with actual logic
    return { name: 'Technician Name', id: 'Technician ID' };
  }
  
}
