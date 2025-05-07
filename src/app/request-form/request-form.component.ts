import { Component, Inject, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { RequestService } from '../services/request.service'; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-request-form',
  imports: [FormsModule, CommonModule,RouterLink],
  standalone: true,
  templateUrl: './request-form.component.html',
  styleUrl: './request-form.component.css'
})
export class RequestFormComponent implements OnInit {
  // Form group for the request form
  allRequests: any[] = [];
  filteredRequests: any[] = [];
  selectedStatus: string = 'الكل';
  loading = true;

  constructor(private requestService: RequestService) {}

  ngOnInit() {
    this.loadRequests();
  }

  loadRequests() {
    this.loading = true;
    this.requestService.getClientRequests().subscribe({
      next: (data) => {
        this.allRequests = data;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  applyFilter() {
    if (this.selectedStatus === 'الكل') {
      this.filteredRequests = this.allRequests;
    } else {
      this.filteredRequests = this.allRequests.filter(r => r.status === this.selectedStatus);
    }
  }

  deleteRequest(id: number) {
    if (confirm('هل أنت متأكد من حذف هذا الطلب؟')) {
      this.requestService.deleteRequest(id).subscribe(() => {
        this.allRequests = this.allRequests.filter(r => r.id !== id);
        this.applyFilter();
      });
    }
  }
}
