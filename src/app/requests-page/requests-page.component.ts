import { Component, OnInit } from '@angular/core';
import { Offer, Order } from '../models/offer';
import { RequestService } from '../services/request.service';
import { RouterLink } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';


@Component({
  selector: 'app-requests-page',
  imports: [RouterLink,CommonModule,NgClass],
  templateUrl:'./requests-page.component.html',
  styleUrl: './requests-page.component.css'
})
export class RequestsPageComponent implements OnInit {
  requests: Order[] = [];
  filteredRequests: Order[] = [];
  selectedTab: string = 'all';

  constructor(private requestService: RequestService) {}

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests(): void {
    this.requestService.getAvailableRequests().subscribe({
      next: (data: Offer[]) => {
        this.requests = data.map(offer => ({
          id: offer.id,
          serviceType: offer.serviceType ?? 0,
          userId: offer.userId ?? 0,
          status: offer.status,
          details: offer.details,
          createdAt: offer.createdAt ? new Date(offer.createdAt) : new Date(),
          price: offer.price ?? 0,
        }));
        this.filterRequests();
      },
      error: (error) => {
        console.error('فشل في تحميل الطلبات:', error);
      }
    });
  }
  

  setTab(tab: string): void {
    this.selectedTab = tab;
    this.filterRequests();
  }

  filterRequests(): void {
    if (this.selectedTab === 'all') {
      this.filteredRequests = this.requests;
    } else {
      this.filteredRequests = this.requests.filter(
        req => req.status === this.selectedTab
      );
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'inProgress': return 'قيد التنفيذ';
      case 'completed': return 'مكتملة';
      case 'cancelled': return 'ملغاة';
      default: return 'غير معروف';
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'inProgress': return 'bg-warning text-dark';
      case 'completed': return 'bg-success';
      case 'cancelled': return 'bg-danger';
      default: return 'bg-secondary';
    }
  }
  }


