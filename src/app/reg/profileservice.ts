import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'https://localhost:7245/Auth/register'; // apiiiiiiiiiiiiiiiii
  
  constructor(private http: HttpClient) {}

  submitProfile(form: any): Observable<any> {    
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('email', form.email);
    if (form.serviceType === 'فني'){
      formData.append('role',"0");
    }
    // formData.append('role', form.serviceType);
    formData.append('password', form.password);
    formData.append('confirmPassword', form.confirmPassword);
    formData.append('phoneNumber', form.phone);
    formData.append('whatsappNumber', form.whatsapp);    
    formData.append('address', form.address);
    formData.append('userName','fsdklfjaslkfjlsa');
    



  //   if (form.serviceType === 'فني') {
  //     formData.append('service', form.service);
  //     formData.append('previousworkname', form.previousworkname);
      
      
  //   //   if (Array.isArray(form.previousworkimgs)) {
  //   //     form.previousworkimgs.forEach((file: File) => {
  //   //       formData.append('previousworkimgs', file);
  //   //     });
  //   //   }
  //   // }
  //   // if (form.serviceType === 'عميل') {
  //   //   formData.append('address', form.address);
  //   // }
    
  //   // if (Array.isArray(form.nationalIdImages)) {
  //   //   form.nationalIdImages.forEach((file: File) => {
  //   //     formData.append('nationalIdImages', file);
  //   //   });
  //   // }
  // }
  return this.http.post(this.apiUrl, formData );
}
}
