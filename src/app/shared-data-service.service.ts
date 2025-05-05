import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SharedDataService {
  private registrationData: any;

  setRegistrationData(data: any) {
    this.registrationData = data;
  }

  getRegistrationData(): any {
    return this.registrationData;
  }
}