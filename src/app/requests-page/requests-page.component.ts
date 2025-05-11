import { Component, OnInit } from '@angular/core';
import { RequestService } from '../services/request.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { Request } from '../models/offer'; 






@Component({
  selector: 'app-requests-page',
  imports: [RouterLink,CommonModule,NgClass],
  templateUrl:'./requests-page.component.html',
  styleUrl: './requests-page.component.css'
})
export class RequestsPageComponent implements OnInit {
  selectedTab: 'all' | 'inProgress' | 'completed' | 'cancelled' = 'all';
  allRequests: Request[] = [];
  filteredRequests: Request[] = [];

  constructor(
    private router: Router,
    private requestsService: RequestService
  ) {}

  ngOnInit(): void {
    this.loadRequests();

    // Add form validation logic
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', (event) => {
      const isValid = form.checkValidity();
      if (!isValid) {
        event.preventDefault();
        event.stopPropagation();
        console.error('Form validation failed.');
      } else {
        console.log('Form is valid.');
      }
      form.classList.add('was-validated');
      });
    }
  }

  loadRequests(): void {
    this.requestsService.getAvailableRequests().subscribe(
      (data: Request[]) => {
        this.allRequests = data;
        this.filterRequests();
        
      },
      (error) => {
        console.error('Error fetching requests:', error);
      }
    );
  }

  setTab(tab: 'all' | 'inProgress' | 'completed' | 'cancelled'): void {
    this.selectedTab = tab;
    this.filterRequests();
  }

  filterRequests(): void {
    if (this.selectedTab === 'all') {
      this.filteredRequests = this.allRequests;
    } else {
      this.filteredRequests = this.allRequests.filter(
        req => {
          const statusMap: { [key: string]: string } = {
            inProgress: 'Pending',
            completed: 'Accepted',
            cancelled: 'Rejected'
          };
          return statusMap[this.selectedTab] === req.status;
        }
      );
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'inProgress':
        return 'قيد التنفيذ';
      case 'completed':
        return 'مكتملة';
      case 'cancelled':
        return 'ملغية';
      default:
        return 'غير معروف';
    }
  }

  // Get the CSS class for each status to style the badges
  getStatusClass(status: string): string {
    switch (status) {
      case 'inProgress':
        return 'badge in-progress';
      case 'completed':
        return 'badge completed';
      case 'cancelled':
        return 'badge cancelled';
      default:
        return 'badge bg-secondary text-white';
    }
  }
  redirectToRequestPage(): void {
    this.router.navigate(['/myrequests']);
  
  }
  GoToRequest(): void {
    this.router.navigate(['/requests']);
  }
}

