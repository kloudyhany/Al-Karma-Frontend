import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Profile {
  id: string;
  name: string;
  phone: string;
  email: string;
  location: string;
  role: string;
  rating?: number;
  experience?: number;
  tasksCompleted?: number;
  imageUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile: Profile | null = null; 
  userId: string = ''; 
  role: string = ''; 
  imageUrl: string = ''; 
  private apiUrl = 'https://api.example.com/profile'; 

  constructor(private http: HttpClient) {}

  // Method to get user profile data from the API
  getUserProfile(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Method to update the user profile
  updateUserProfile(user: any): Observable<any> {
    return this.http.put<any>(this.apiUrl, user);
  }

  // Method to change the profile image
  changeProfileImage(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image, image.name);
    return this.http.post<any>(`${this.apiUrl}/image`, formData);
  }
}

