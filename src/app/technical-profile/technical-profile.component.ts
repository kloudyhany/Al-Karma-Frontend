import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { ProfileService } from '../services/profile.service'; 
import { Router } from '@angular/router';

@Component({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './technical-profile.component.html',
  styleUrl: './technical-profile.component.css'
})
export class TechnicalProfileComponent implements OnInit {

  user = {
    name: '',
    experience: 0,
    role: '',
    rating: 0,
    tasksCompleted: 0,
    phone: '',
    email: '',
    location: ''
  };
  
  portfolioImages: string[] = [];
  imageUrl = 'assets/images/default-profile.jpg';
  isEditing = false;

  constructor(private profileService: ProfileService,private router:Router) {}

  ngOnInit(): void {
    // Call the API to fetch the user profile when the component initializes
    this.getUserProfile();
  }

  // Method to get the user profile from the API
  getUserProfile(): void {
    this.profileService.getUserProfile().subscribe(
      (data) => {
        //  API returns an object with user and portfolio data
        this.user = data.user;
        this.portfolioImages = data.portfolioImages;
        this.imageUrl = data.imageUrl || this.imageUrl; // Set default image if none provided
        this.user.experience = data.experience || 0; // Set default experience if none provided
      },
      (error) => {
        console.error('Error fetching user profile:', error);
      }
    );
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      this.imageUrl = URL.createObjectURL(file); // Preview the selected image
      this.profileService.changeProfileImage(file).subscribe(
        (response) => {
          console.log('Image uploaded successfully');
        },
        (
          

        ) => {
          console.error('Error uploading image:', Error);
        }
      );
    }
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  saveChanges(): void {
    this.profileService.updateUserProfile(this.user).subscribe(
      (response) => {
        console.log('Profile updated successfully');
        alert('Profile changes saved!');
      },
      (error) => {
        console.error('Error saving profile:', error);
        alert('Failed to save changes');
      }
    );
  }

  changePassword(): void {
    this.router.navigate(['/resetpassword']);
  }
  
}


  

    
  
