import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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
  service: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'https://localhost:7245/Auth/register';

  constructor(private http: HttpClient) {}

  submitProfile(form: ProfileForm): Observable<any> {
    return from(this.preparePayload(form)).pipe(
      switchMap(payload => this.http.post(this.apiUrl, payload))
    );
  }

  private async preparePayload(form: ProfileForm): Promise<any> {
    const payload: any = {
      name: form.name,
      email: form.email,
      password: form.password,
      confirmPassword: form.confirmPassword,
      phoneNumber: form.phone,
      whatsappNumber: form.whatsapp,
      address: form.address,
      userName: form.name,
      role: form.serviceType === 'فني' ? '1' : '0'
    };

    // Process national ID images
    if (form.nationalIdImages) {
      const files = await this.getValidFiles(form.nationalIdImages);
      if (files[0]) payload.SSNFront_FilePath = await this.fileToBase64(files[0]);
      if (files[1]) payload.SSNBack_FilePath = await this.fileToBase64(files[1]);
    }

    // Process technician-specific data
    if (form.serviceType === 'فني') {
      payload.serviceType = form.service;
      if (form.previousworkname) payload.previousworkname = form.previousworkname;
      
      if (form.previousworkimgs) {
        const workImages = await this.getValidFiles(form.previousworkimgs);
        payload.attachments = await Promise.all(
          workImages.map(file => this.fileToBase64(file))
        );
      }
    }

    return payload;
  }

  private getValidFiles(fileList: FileList): File[] {
    const files: File[] = [];
    // Proper FileList iteration
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      if (file instanceof File) {
        files.push(file);
      }
    }
    return files;
  }

  private fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  }
}