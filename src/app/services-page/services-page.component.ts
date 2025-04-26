import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-services-page',
  imports: [BrowserModule, FormsModule  , NgbModalModule],
  standalone: true,
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.css'
})
export class ServicesPageComponent implements OnInit {
  
  userType: 'technician' | 'provider' = 'provider'; // او 'technician'

  services = [
    { id: 1, name: 'كهرباء', city: 'الشروق', price: 200, status: 'pending', rating: 4.5, orders: 10 },
    { id: 2, name: 'سباكة', city: 'الشروق', price: 150, status: 'in_progress', rating: 4.8, orders: 5 },
    { id: 3, name: 'دهان', city: 'الشروق', price: 300, status: 'completed', rating: 4.2, orders: 7 },
    { id: 4, name: 'نجارة', city: 'الشروق', price: 250, status: 'pending', rating: 4.6, orders: 8 },
    { id: 5, name: 'تنظيف', city: 'الشروق', price: 100, status: 'in_progress', rating: 4.9, orders: 12 },
    { id: 6, name: 'تكييف', city: 'الشروق', price: 400, status: 'completed', rating: 4.1, orders: 3 },
    { id: 7, name: ' اسقف معلقه', city: 'الشروق', price: 500, status: 'pending', rating: 4.7, orders: 6 },
    { id: 8, name: 'ارضيات وحوائط', city: 'الشروق', price: 350, status: 'in_progress', rating: 4.3, orders: 9 },
    { id: 9, name: ' عماله عاديه', city: 'الشروق', price: 450, status: 'completed', rating: 4.0, orders: 2 },
  ];

  filteredServices = [...this.services];

  selectedCity = '';
  selectedCategory = '';
  selectedSort = '';
  selectedService: any = null; // الخدمة المحددة
  requestModal: any; // متغير لتخزين الموديل
  cities = ['الشروق', 'العبور', 'مدينة نصر', 'مصر الجديدة', 'الزمالك'];

  constructor() {}

  ngOnInit(): void {}

  filterServices() {
    this.filteredServices = this.services
      .filter(service => 
        (this.selectedCity ? service.city === this.selectedCity : true) &&
        (this.selectedCategory ? service.name === this.selectedCategory : true)
      )
      .sort((a, b) => {
        if (this.selectedSort === 'price-asc') return a.price - b.price;
        if (this.selectedSort === 'price-desc') return b.price - a.price;
        return 0;
      });
  }
  openRequestModal(service: any) {
    const bobab = document.createElement('div');
    bobab.style.position = 'fixed';
    bobab.style.bottom = '20px';
    bobab.style.right = '20px';
    bobab.style.backgroundColor = '#333';
    bobab.style.color = '#fff';
    bobab.style.padding = '10px 20px';
    bobab.style.borderRadius = '5px';
    bobab.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
    bobab.style.zIndex = '1000';
    bobab.textContent = `طلب خدمة: ${service.name}`;

    document.body.appendChild(bobab);

    setTimeout(() => {
      document.body.removeChild(bobab);
    }, 3000);
  }
  getStatusText(status: string) {
    switch(status) {
      case 'pending': return 'قيد الانتظار';
      case 'in_progress': return 'قيد التنفيذ';
      case 'completed': return 'مكتمل';
      default: return 'غير معروف';
    }
  }
  loading = false;

confirmRequest() {
  if (!this.selectedService) return;

  this.loading = true;

  // محاكاة تأخير API Call
  setTimeout(() => {
    console.log('  تم طلب الخدمة: بنجااح', this.selectedService);

    this.loading = false;
    this.requestModal.hide();
    const successNotification = document.createElement('div');
    successNotification.style.position = 'fixed';
    successNotification.style.top = '20px';
    successNotification.style.right = '20px';
    successNotification.style.backgroundColor = '#28a745';
    successNotification.style.color = '#fff';
    successNotification.style.padding = '10px 20px';
    successNotification.style.borderRadius = '5px';
    successNotification.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
    successNotification.style.zIndex = '1000';
    successNotification.textContent = 'تم طلب الخدمة بنجاح!';

    document.body.appendChild(successNotification);

    setTimeout(() => {
      document.body.removeChild(successNotification);
    }, 3000);
  }, 3000); 
}

  
}
