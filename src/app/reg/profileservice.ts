import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'https://localhost:7245/Auth/register'; // apiiiiiiiiiiiiiiiii

  constructor(private http: HttpClient) {}

  submitProfile(form: any): Observable<any> {
    const formData = new FormData();

    formData.append('name', form.name);
    formData.append('password', form.password);
    formData.append('serviceType', form.serviceType);
    formData.append('phone', form.phone);
    formData.append('whatsapp', form.whatsapp);

    if (form.address) {
      formData.append('address', form.address);
    }

    if (form.serviceType === 'فني') {
      formData.append('service', form.service);
      formData.append('previousworkname', form.previousworkname);

      if (Array.isArray(form.previousworkimgs)) {
        form.previousworkimgs.forEach((file: File) => {
          formData.append('previousworkimgs', file);
        });
      }
    }

    if (Array.isArray(form.nationalIdImages)) {
      form.nationalIdImages.forEach((file: File) => {
        formData.append('nationalIdImages', file);
      });
    }

    return this.http.post(this.apiUrl, formData);
  }
}
