import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { OrderdServiceService} from '../services/orderd-service.service'; 
import { ServicesService } from '../services/services.service'; 
import { AuthService } from '../services/auth.service'; // 



@Component({
  selector: 'app-services-page',
  imports: [BrowserModule, FormsModule, NgbModalModule, RouterLink],
  providers: [OrderdServiceService, ServicesService],
  standalone: true,
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.css'
})
export class ServicesPageComponent implements OnInit {
  

  // services = [
  //   { id: 1, name: 'كهرباء', city: 'الشروق', price: 200, status: 'pending', rating: 4.5, orders: 10 },
  //   { id: 2, name: 'سباكة', city: 'الشروق', price: 150, status: 'in_progress', rating: 4.8, orders: 5 },
  //   { id: 3, name: 'دهان', city: 'الشروق', price: 300, status: 'completed', rating: 4.2, orders: 7 },
  //   { id: 4, name: 'نجارة', city: 'الشروق', price: 250, status: 'pending', rating: 4.6, orders: 8 },
  //   { id: 5, name: 'تنظيف', city: 'الشروق', price: 100, status: 'in_progress', rating: 4.9, orders: 12 },
  //   { id: 6, name: 'تكييف', city: 'الشروق', price: 400, status: 'completed', rating: 4.1, orders: 3 },
  //   { id: 7, name: ' اسقف معلقه', city: 'الشروق', price: 500, status: 'pending', rating: 4.7, orders: 6 },
  //   { id: 8, name: 'ارضيات وحوائط', city: 'الشروق', price: 350, status: 'in_progress', rating: 4.3, orders: 9 },
  //   { id: 9, name: ' عماله عاديه', city: 'الشروق', price: 450, status: 'completed', rating: 4.0, orders: 2 },
  // ];

  services: { category: string; [key: string]: any }[] = [];
  allServices: { category: string; [key: string]: any }[] = [];
  categories: string[] = [];
  selectedCategory = '';
  userRole: string = '';
  myOrders: any[] = [];

  constructor(
    private serviceService: ServicesService,
    private orderService: OrderdServiceService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userRole = this.authService.getUserRole() ?? ''; // 'Client' or 'Technician'
    this.serviceService.getAllServices().subscribe(data => {
      this.allServices = data;
      this.services = data;
      this.categories = [...new Set(data.map(s => s.category))];
    });

    if (this.userRole === 'Technician') {
      this.loadMyOrders();
    }
  }

  filterServices() {
    this.services = this.selectedCategory
      ? this.allServices.filter(s => s.category === this.selectedCategory)
      : this.allServices;
  }

  requestService(service: any) {
    // ممكن يفتح مودال لطلب الخدمة
    alert(`طلبت خدمة: ${service.name}`);
  }

  loadMyOrders() {
    this.orderService.getmyOrders().subscribe(data => {
      this.myOrders = data;
    });
  }
}
