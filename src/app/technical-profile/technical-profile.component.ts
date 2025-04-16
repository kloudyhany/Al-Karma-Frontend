import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceProfileService } from '../service-profile.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './technical-profile.component.html',
  styleUrl: './technical-profile.component.css'
})
export class TechnicalProfileComponent {
  rating = 5;
  profileForm: FormGroup;
  saved: boolean = false;

  constructor(private profileService: ServiceProfileService, private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      // Define form controls here, e.g., 'name': ['']
    });
  }


saveProfile() {
  this.profileService.saveProfile(this.profileForm.value).subscribe(() => {
    this.saved = true;
  });
}
}