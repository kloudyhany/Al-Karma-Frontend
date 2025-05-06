import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clientinfo',
  imports: [CommonModule, FormsModule],
  templateUrl: './clientinfo.component.html',
  styleUrl: './clientinfo.component.css'
})
export class ClientinfoComponent {
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
      this.user = JSON.parse(userData);
      this.imageUrl = this.user.imageUrl || 'assets/default-user.png';
    } else {
      console.error('No user data found in localStorage.');
    }
  }
}
