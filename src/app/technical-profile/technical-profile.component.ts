import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceProfileService } from '../technical_service-profile.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../services/profile.service'; // Import ProfileService

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

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    // Call the API to fetch the user profile when the component initializes
    this.getUserProfile();
  }

  // Method to get the user profile from the API
  getUserProfile(): void {
    this.profileService.getUserProfile().subscribe(
      (data) => {
        // Assuming the API returns an object with user and portfolio data
        this.user = data.user;
        this.portfolioImages = data.portfolioImages;
        this.imageUrl = data.imageUrl || this.imageUrl; // If no image URL is provided, keep the default
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
        (error) => {
          console.error('Error uploading image:', error);
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
    alert('This will open password change dialog!');
  }
  
}


  

    
  
