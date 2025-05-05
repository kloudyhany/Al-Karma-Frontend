import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ProfileForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  whatsapp: string;
  address: string;
  serviceType: 'فني' | 'عميل';
  nationalIdImages?: FileList;
  previousworkimgs?: FileList;
  previousworkname?: string;
  service : string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'https://localhost:7245/Auth/register';

  constructor(private http: HttpClient) {}

  submitProfile(form: ProfileForm): Observable<any> {
    const formData = this.prepareFormData(form);
    return this.http.post(this.apiUrl, formData);
  }

  private prepareFormData(form: ProfileForm): FormData {
    const formData = new FormData();

    // Append basic user info
    this.appendBasicInfo(formData, form);
    
    // Append role-specific data
    this.appendRoleSpecificData(formData, form);
    
    // Append national ID images if they exist
    this.appendNationalIdImages(formData, form.nationalIdImages);

    return formData;
  }

  private appendBasicInfo(formData: FormData, form: ProfileForm): void {
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('password', form.password);
    formData.append('confirmPassword', form.confirmPassword);
    formData.append('phoneNumber', form.phone);
    formData.append('whatsappNumber', form.whatsapp);
    formData.append('address', form.address);
    formData.append('userName', form.name);
  }

  private appendRoleSpecificData(formData: FormData, form: ProfileForm): void {
    if (form.serviceType === 'فني') {
      formData.append('role', '1');
      formData.append('serviceType', form.service);
      
      if (form.previousworkname) {
        formData.append('previousworkname', form.previousworkname);
      }

      if (form.previousworkimgs?.length) {
        if (form.previousworkimgs.length > 0) {
          formData.append('SSNFront_FilePath', form.previousworkimgs[0]); // Changed field name to match C#
        }
        if (form.previousworkimgs.length > 1) {
          formData.append('SSNBack_FilePath', form.previousworkimgs[1]); // Changed field name to match C#
        }
        if (form.previousworkimgs.length > 2) {
          formData.append('SSNBack_FilePath', form.previousworkimgs[2]); // Changed field name to match C#
        }
        if (form.previousworkimgs.length > 3) {
          formData.append('SSNBack_FilePath', form.previousworkimgs[3]); // Changed field name to match C#
        }
      }
    } else if (form.serviceType === 'عميل') {
      formData.append('role', '0');
    }
  }

  private appendNationalIdImages(formData: FormData, nationalIdImages?: FileList): void {
    if (nationalIdImages?.length) {
      if (nationalIdImages.length > 0) {
        formData.append('SSNFront_FilePath', nationalIdImages[0]); // Changed field name to match C#
      }
      if (nationalIdImages.length > 1) {
        formData.append('SSNBack_FilePath', nationalIdImages[1]); // Changed field name to match C#
      }
    }
  }
}