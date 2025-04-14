import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-technician-evaluation',
  imports: [NgClass, CommonModule, FormsModule],
  templateUrl: './technician-evaluation.component.html',
  styleUrl: './technician-evaluation.component.css'
})
export class TechnicianEvaluationComponent {

  technicians = [
    {
      id: 1,
      name: 'فني 1',
      rating: 3,
      hoverRating: 0,
      completedRequests: 10,
      reviews: 5,
      reviewText: ''
    },
    {
      id: 2,
      name: 'فني 2',
      rating: 4,
      hoverRating: 0,
      completedRequests: 15,
      reviews: 8,
      reviewText: ''
    }
  ];

  constructor(private http: HttpClient) {}

  evaluateTechnician(id: number, rating: number): void {
    const technician = this.technicians.find(t => t.id === id);
    if (technician) {
      technician.rating = rating;

      // إرسال التقييم للسيرفر (API)
      this.http.post('/api/technicians/evaluate', {
        technicianId: id,
        rating: rating,
        comment: technician.reviewText
      }).subscribe({
        next: () => alert('تم إرسال التقييم بنجاح'),
        error: () => alert('حدث خطأ أثناء إرسال التقييم')
      });
    }
  }

  setHover(id: number, rating: number): void {
    const technician = this.technicians.find(t => t.id === id);
    if (technician) technician.hoverRating = rating;
  }

  clearHover(id: number): void {
    const technician = this.technicians.find(t => t.id === id);
    if (technician) technician.hoverRating = 0;
  }
  setReviewText(id: number, text: string): void {
    const technician = this.technicians.find(t => t.id === id);
    if (technician) technician.reviewText = text;

}
}