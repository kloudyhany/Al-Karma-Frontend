import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class profileService {
  private apiUrl = 'https://your-api-endpoint.com/register';  // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  submitProfile(form: any): Observable<any> {
    const formData = new FormData();

    formData.append('name', form.name);
    formData.append('job', form.job);
    formData.append('password', form.password);
    formData.append('serviceType', form.serviceType);
    formData.append('service', form.serviceType);
    formData.append('previousworkname', form.previousworkname);
    formData.append('clientSection', form.clientSection);
    formData.append('phone', form.phone);
    formData.append('whatsapp', form.whatsapp);
    if (form.address) {
      formData.append('address', form.address);
    }

    if (form.nationalIdImages instanceof FileList) {
      Array.from(form.nationalIdImages).forEach((file, index) => {
        formData.append('nationalIdImages', file as Blob);
      });
    }

   
    if (form.previousworkimgs instanceof FileList) {
      Array.from(form.previousworkimgs).forEach((file, index) => {
        formData.append('previousworkimgs', file as Blob);
      });
    }

    return this.http.post(this.apiUrl, formData);
  }
}
