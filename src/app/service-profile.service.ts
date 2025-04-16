import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceProfileService {

  constructor(private http: HttpClient) {}

  saveProfile(data: any) {
    return this.http.post('api heeeeeeeeeeeer', data);
  }
}
