import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { AuthService } from '../services/auth.service';
import { OfferService } from '../services/offer.service';
import { Router } from '@angular/router';
import { Offer } from '../models/offer';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-offer-clientrequest',
  imports: [CommonModule,FormsModule],
  templateUrl: './offer-clientrequest.component.html',
  styleUrl: './offer-clientrequest.component.css'
})
export class OfferClientrequestComponent implements OnInit {
  technicianName: string = '';
  technicianId: string = '';
  availableRequests: ServicesService[] = [];
  selectedRequestId: number | null = null;
  price: number = 0;
  message: string = '';

  constructor(
    private authService: AuthService,
    private offerService: OfferService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // const user = this.authService.getUser();
    // this.technicianName = user.name;
    // this.technicianId = user.id.toString();

    // جلب الطلبات المفتوحة
    // هنا يمكن استدعاء خدمة لعرض الطلبات المفتوحة
  }

  submitOffer(): void {
    if (this.selectedRequestId && this.price > 0 && this.message) {
      const offer: Offer = {
        requestId: this.selectedRequestId,
        technicianId: this.technicianId,
        price: this.price,
        message: this.message,
        isAccepted: false // العرض ليس مقبولاً بعد
        ,
        id: 0,
        providerName: '',
        providerImageUrl: '',
        deliveryTime: '',
        status: 'Accepted',
        isRejected: false,
        createdAt: new Date()};

      this.offerService.submitOffer(offer).subscribe(
        (response) => {
          alert('تم تقديم العرض بنجاح');
          this.resetForm();
        },
        (error) => {
          alert('حدث خطأ أثناء تقديم العرض');
        }
      );
    } else {
      alert('الرجاء إدخال جميع البيانات');
    }
  }
  getStatusLabel(status: string): string {
    const statusLabels: { [key: string]: string } = {
      active: 'نشط',
      expired: 'منتهي',
      pending: 'قيد الانتظار'
    };
    return statusLabels[status] || 'غير معروف';
  }

  resetForm() {
    this.selectedRequestId = null;
    this.price = 0;
    this.message = '';
  }

}
