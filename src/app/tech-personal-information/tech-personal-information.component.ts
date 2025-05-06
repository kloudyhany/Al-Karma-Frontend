import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tech-personal-information',
  imports: [CommonModule],
  providers: [CookieService],
  templateUrl: './tech-personal-information.component.html',
  styleUrls: ['./tech-personal-information.component.css']
})
export class TechPersonalInformationComponent implements OnInit {
  user: any = {};
  imageUrl: string = 'assets/default-user.png';

  constructor(@Inject(CookieService) private cookieService: CookieService) {}

  ngOnInit(): void {
    this.loadUserFromCookie();
  }
  saveProfilePicture(): void {
    if (this.imageUrl && this.user) {
      this.user.imageUrl = this.imageUrl;
      this.cookieService.set('user', JSON.stringify(this.user), 1, '/');
      console.log('Profile picture saved successfully.');
    } else {
      console.error('No profile picture or user data to save.');
    }
  }

  onPhotosSelected($event: Event): void {
    const target = $event.target as HTMLInputElement;
    const files = target?.files;
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
          this.imageUrl = e.target.result as string;
        }
      };
      reader.readAsDataURL(files[0]);
    } else {
      console.error('No files selected.');
    }
  }
  onSave(): void {
    if (this.user) {
      this.cookieService.set('user', JSON.stringify(this.user), 1, '/');
      console.log('User data saved to cookie:', this.user);
    } else {
      console.error('No user data to save.');
    }
  }

  loadUserFromCookie(): void {
    const userData = this.cookieService.get('user');
    if (userData) {
      this.user = JSON.parse(userData);
  
      // Now access the nested properties under this.user.value
      const userInfo = this.user.value;
  
      if (userInfo) {
        console.log('ID:', userInfo.id);
        console.log('Email:', userInfo.email);
        console.log('Phone Number:', userInfo.phoneNumber);
        console.log('Username:', userInfo.userName);
        console.log('Role:', userInfo.role);
        console.log('Token:', userInfo.token);
        console.log('Expires In:', userInfo.expiresIn);
        console.log('Refresh Token:', userInfo.refreshToken);
        console.log('Refresh Token Expiration:', userInfo.refreshTokenExpiration);
  
        this.imageUrl = userInfo.imageUrl || 'assets/default-user.png'; // If you later add an imageUrl field
      } else {
        console.error('Invalid user structure in cookie.');
      }
    } else {
      console.error('No user data found in cookies.');
    }
  }
  
}
