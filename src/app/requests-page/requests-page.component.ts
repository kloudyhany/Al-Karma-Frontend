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
  }

  // Fetch requests from the API
  loadRequests(): void {
    this.requestsService.getAvailableRequests().subscribe(
      (data: Request[]) => {
        this.allRequests = data;
        this.filterRequests();
      },
      (error) => {
        console.error('Error fetching requests:', error);
        // Handle error (e.g., show a notification or fallback)
      }
    );
  }

  // Set the selected tab and filter the requests accordingly
  setTab(tab: 'all' | 'inProgress' | 'completed' | 'cancelled'): void {
    this.selectedTab = tab;
    this.filterRequests();
  }

  // Filter requests based on the selected tab
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

  // Get the label for each request status
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
}

