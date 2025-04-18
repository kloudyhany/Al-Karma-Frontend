import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientProfileService {

  constructor(private http: HttpClient) {}

  getClientProfile(): Observable<any> {
    return this.http.get('/api/client/profile'); // apiiiiiiiiiiiiiiiii heeeeeeeeeeeeeeeeer
  }}
