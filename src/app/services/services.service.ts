import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../models/offer';
import { of as observableOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private baseUrl = 'https://localhost:5001/api/requests'; //apiiiiiiiiiii hereeeeeeeee

  constructor(private http: HttpClient) {}

  createRequest(data: any) {
    return this.http.post(`${this.baseUrl}`, data);
  }

  getMyRequests(clientId: string) {
    return this.http.get<ServicesService[]>(`${this.baseUrl}/by-client/${clientId}`);
  }

  getAvailableRequests() {
    return this.http.get<ServicesService[]>(`${this.baseUrl}/open`);
  }
 




  getAllServices(): Observable<Service[]> {
    const mockServices: Service[] = [
      { id: 1, name: 'كهرباء', category: 'Electrical', price: 200, status: 'pending', rating: 4.5, orders: 10, description: 'Electrical services', imageUrl: 'https://example.com/electrical.jpg', offers: [] },
      { id: 2, name: 'سباكة', category: 'Plumbing', price: 150, status: 'in_progress', rating: 4.8, orders: 5, description: 'Plumbing services', imageUrl: 'https://example.com/plumbing.jpg', offers: [] },
      { id: 3, name: 'دهان', category: 'Painting', price: 300, status: 'completed', rating: 4.2, orders: 7, description: 'Painting services', imageUrl: 'https://example.com/painting.jpg', offers: [] },
      { id: 3, name: 'حداده ', category: 'حداده', price: 300, status: 'completed', rating: 4.2, orders: 7, description: 'Painting services', imageUrl: 'https://example.com/painting.jpg', offers: [] },
      { id: 4, name: 'نجارة', category: 'Carpentry', price: 250, status: 'pending', rating: 4.6, orders: 8, description: 'Carpentry services', imageUrl: 'https://example.com/carpentry.jpg', offers: [] },
      { id: 5, name: 'تنظيف', category: 'Cleaning', price: 100, status: 'in_progress', rating: 4.9, orders: 12, description: 'Cleaning services', imageUrl: 'https://example.com/cleaning.jpg', offers: [] },
      { id: 6, name: 'تكييف', category: 'Air Conditioning', price: 400, status: 'completed', rating: 4.1, orders: 3, description: 'Air conditioning services', imageUrl: 'https://example.com/ac.jpg', offers: [] },
      { id: 7, name: 'اسقف معلقه', category: 'Ceiling Installation', price: 500, status: 'pending', rating: 4.7, orders: 6, description: 'Ceiling installation services', imageUrl: 'https://example.com/ceiling.jpg', offers: [] },
      { id: 8, name: 'ارضيات وحوائط', category: 'Flooring and Walls', price: 350, status: 'in_progress', rating: 4.3, orders: 9, description: 'Flooring and wall services', imageUrl: 'https://example.com/flooring.jpg', offers: [] },
      { id: 9, name: 'عماله عاديه', category:'General Labor' , price :450 , status:'completed' , rating :4.0 , orders :2 , description:'General labor services' , imageUrl:'https://example.com/labor.jpg' , offers :[]}    ,  
      { id: 6, name: 'الومينتال', category: 'Air Conditioning', price: 400, status: 'completed', rating: 4.1, orders: 3, description: 'Air conditioning services', imageUrl: 'https://example.com/ac.jpg', offers: [] },
      { id: 7, name: 'اسقف معلقه', category: 'Ceiling Installation', price: 500, status: 'pending', rating: 4.7, orders: 6, description: 'Ceiling installation services', imageUrl: 'https://example.com/ceiling.jpg', offers: [] },
    ];
    return of(mockServices);
  }
  name: string = '';
  age: number = 0;
  file: File | null = null;
  // Handle file selection
  handleFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.file = input.files[0];
    }
  }

  // Submit form data
  uploadData(): void {
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('age', this.age.toString());
    if (this.file) {
      formData.append('file', this.file, this.file.name);
    }

    this.http
      .post('https://localhost:7245/api/Request', formData)
      .subscribe({
        next: (response) => console.log('Success!', response),
        error: (error) => console.error('Error:', error),
      });
  }
}

function of(mockServices: Service[]): Observable<Service[]> {
  return observableOf(mockServices);


}



