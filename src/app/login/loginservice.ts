import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class loginservice {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';  // Fake API endpoint for testing

  constructor(private http: HttpClient) {}

  login(credentials: { phone: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl, credentials);  
  }
}
