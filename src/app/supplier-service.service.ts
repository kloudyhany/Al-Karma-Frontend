import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierServiceService {
  private baseUrl = 'https://your-api.com/api/supplier'; // Apiiiiiiiiiii heeeeeeeeeeeer

  constructor(private http:HttpClient) { }
  uploadFiles(files: File[], field: string): Observable<any> {
    const formData = new FormData();
    files.forEach((file, i) => formData.append(`${field}[${i}]`, file));
    return this.http.post(`${this.baseUrl}/upload`, formData);
  }
  uploadSheet(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('sheet', file);
    return this.http.post(`${this.baseUrl}/upload-sheet`, formData);
  }
  saveProfile(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/save`, data);
  }
  getSupplierProfile(): Observable<any> {
    return this.http.get(`${this.baseUrl}/profile`);
  }
}
