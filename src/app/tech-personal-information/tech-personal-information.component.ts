import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tech-personal-information',
  imports: [CommonModule],
  templateUrl: './tech-personal-information.component.html',
  styleUrls: ['./tech-personal-information.component.css']
})
export class TechPersonalInformationComponent implements OnInit {
  user: any = {};
  imageUrl: string = 'assets/default-user.png';

  constructor(private cookieService: CookieService) {}

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
      this.imageUrl = this.user.imageUrl || 'assets/default-user.png';
    } else {
      console.error('No user data found in cookies.');
    }
  }
}
