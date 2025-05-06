import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-personal-information',
  imports: [CommonModule],
  templateUrl: './tech-personal-information.component.html',
  styleUrls: ['./tech-personal-information.component.css']
})
export class TechPersonalInformationComponent implements OnInit {
  user: any = {};
  imageUrl: string = 'assets/default-user.png';

  constructor() {}

  ngOnInit(): void {
    this.loadUserFromLocalStorage();
  }

  saveProfilePicture(): void {
    if (this.imageUrl && this.user) {
      this.user.imageUrl = this.imageUrl;
      localStorage.setItem('user', JSON.stringify(this.user));
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
      localStorage.setItem('user', JSON.stringify(this.user));
      console.log('User data saved to localStorage:', this.user);
    } else {
      console.error('No user data to save.');
    }
  }

  loadUserFromLocalStorage(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      this.user = parsedUser.value || {}; // Flatten the structure
      this.imageUrl = this.user.imageUrl ;
      
    } else {
      console.error('No user data found in localStorage.');
    }
  }
}
