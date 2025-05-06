import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, NgClass, CommonModule],
  standalone: true,
  selector: 'app-rating-client', 

  templateUrl: './rating-client.component.html',
  styleUrl: './rating-client.component.css'
})
export class RatingClientComponent {

  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  form: FormGroup = this.fb.group({
    stars: [0, Validators.required],
    comment: ['', [Validators.required, Validators.maxLength(300)]],
  });

  selectedStars = 0;

  setRating(stars: number) {
    this.selectedStars = stars;
    this.form.patchValue({ stars });
  }

  submitRating() {
    if (this.form.invalid) return;

    const ratingData = this.form.value;
    this.http.post('/api/reviewclient', ratingData).subscribe({
      next: () => alert('شكرا علي التقييم!'),
      complete: () => {
        this.form.reset();
        this.selectedStars = 0;
      },
      error: () => alert('حصل خطا ما يرجى المحاولة لاحقا!'),

    });
  }
}
