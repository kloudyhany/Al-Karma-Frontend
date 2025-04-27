import { ServiceConfirmationComponent } from './service-confirmation/service-confirmation.component';
import { Routes } from '@angular/router';
import { SupplierComponent } from './supplier/supplier.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { SupplierProfileComponent } from './supplier-profile/supplier-profile.component';
import { ClientServiceComponent } from './client-service/client-service.component';
import { loginComponent as LoginComponent } from './login/login.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { OfferListComponent } from './offer-list/offer-list.component';

export const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    title: ' تسجيل الدخول',
  },
  {
    path: 'technican',
    component: LoginComponent,
    title: '  مستخدم جديد',
  },
  {
    path: 'services',
    component: ServicesPageComponent,
    title: ' خدماتنا',
  },

  


  {
    path: 'supplier',
    component: SupplierComponent,
    title: 'تسجيل المورد',
  },

  {
    path: 'clientprofile',
    component: ClientProfileComponent,
    title: ' الملف الشخصي للعميل',
  },
  {
    path: 'client_service',
    component: ClientServiceComponent,
    title: 'خدمة العملاء',
  },

  {
    path: 'serviceconfirmation',
    component: ServiceConfirmationComponent,
    title: 'عرض سعر',
  },

  {
    path: '',
    component: HomeComponent,
  },
  // {
  //   path: 'offers',
  //   component: OfferCardComponent,
  //   title: ' الطلبات',
  // },
  {
    path: '**',
    component: NotfoundComponent,
    title: '404 Not Found',
  },

  { path: '', component: HomeComponent },

  { path: 'offers', component: OfferListComponent, title: ' الطلبات' },
  {
    path: 'profile',
    component: SupplierProfileComponent,
    title: ' الملف الشخصي',
  },

  { path: '**', component: NotfoundComponent, title: '404 Not Found' },
];
