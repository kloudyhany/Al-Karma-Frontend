import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RatingRequest } from '../models/offer';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private baseUrl = ''; // غيّرها حسب عنوان API الفعلي

  constructor(private http: HttpClient) {}

  submitRating(payload: RatingRequest): Observable<any> {
    return this.http.post(this.baseUrl, payload);
  }
  }
