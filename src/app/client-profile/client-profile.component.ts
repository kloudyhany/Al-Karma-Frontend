import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../services/profile.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-client-profile',
  imports: [CommonModule, FormsModule, RouterLink],
  standalone: true,
  templateUrl:'./client-profile.component.html',
  
  styleUrl: './client-profile.component.css'
})
export class ClientProfileComponent implements OnInit {
  user: any = {};
  imageUrl: string = 'assets/default-user.png';
  isEditing = false;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {
    this.profileService.getUserProfile().subscribe({
      next: (data) => {
        this.user = data;
        this.imageUrl = data.imageUrl || 'assets/default-user.png';
      },
      error: (err) => console.error('خطأ في تحميل البيانات:', err),
    });
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  saveChanges(): void {
    this.profileService.updateUserProfile(this.user).subscribe({
      next: () => {
        this.isEditing = false;
        console.log('تم حفظ التعديلات');
      },
      error: (err) => console.error('فشل في الحفظ:', err),
    });
  }

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);

      this.profileService.uploadProfileImage(this.user.id, file).subscribe({
        next: (res) => {
          console.log('تم رفع الصورة بنجاح');
          this.user.imageUrl = res.imageUrl;
        },
        error: (err) => console.error('فشل في رفع الصورة:', err),
      });
    }
  }

}

 

   



