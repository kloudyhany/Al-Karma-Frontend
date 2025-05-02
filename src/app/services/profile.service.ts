import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = ''; // Replace with actual base URL

  constructor(private http: HttpClient) {}

  // Get profile data
  getUserProfile(): Observable<any> {
    return this.http.get(`${this.baseUrl}/profile`);
  }

  // Update profile
  updateUserProfile(userData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update-profile`, userData);
  }

  // Upload/change profile image
  changeProfileImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', file);
    return this.http.post(`${this.baseUrl}/upload-profile-image`, formData);
  }
  



  // Update basic profile info (name, phone, etc.)
  updateProfile(userData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update-profile`, userData);
  }

  // Upload profile image
  uploadProfileImage(userId: number, imageFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', imageFile);
    return this.http.post(`${this.baseUrl}/upload-profile-image`, formData);
  }

  // Change password
  changePassword(currentPassword: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/change-password`, {
      currentPassword,
      newPassword
    });
  }
  }
  


