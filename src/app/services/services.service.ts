import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../models/offer';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }
   //  جلب جميع الخدمات
  // هنا نستخدم http.get لجلب جميع الخدمات من API
  // يمكن أن يكون لديك API خاص بك لجلب الخدمات
  
   getAllServices(): Observable<Service[]> {
    return this.http.get<Service[]>('https://your-api-url/api/services');
  }
}
