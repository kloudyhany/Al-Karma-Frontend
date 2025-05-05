import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SrvRecord } from 'node:dns';

@Injectable({
  providedIn: 'root'
})
export class loginservice {
  private apiUrl = 'https://localhost:7245/auth/login'; 

  constructor(private http: HttpClient) {}

  login(credentials: {email :string , password : string}): Observable<any> {
    return this.http.post<any>('https://localhost:7245/auth/login', credentials, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'json'
    });
  }

  
}
