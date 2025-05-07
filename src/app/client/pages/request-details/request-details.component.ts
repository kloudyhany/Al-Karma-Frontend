import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../../../services/request.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-request-details',
  imports: [CommonModule],
  templateUrl: './request-details.component.html',
  styleUrl: './request-details.component.css'
})
export class RequestDetailsComponent implements OnInit {
  requestId!: number;
  request: any;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService
  ) {}

  ngOnInit() {
    this.requestId = +this.route.snapshot.paramMap.get('id')!;
    this.requestService.getRequestById(this.requestId).subscribe({
      next: (data) => {
        this.request = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching request details:', error);
        this.loading = false;
      }
    });
  }

}
