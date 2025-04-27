import { ServiceConfirmationComponent } from './service-confirmation/service-confirmation.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { SupplierProfileComponent } from './supplier-profile/supplier-profile.component';
import { ClientServiceComponent } from './client-service/client-service.component';
import { loginComponent } from './login/login.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { OfferListComponent } from './offer-list/offer-list.component';

import { TechinicalComponent } from './techinical/techinical.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { NgModule } from '@angular/core';



export const routes: Routes = [
  {
    path: 'login',
    component: loginComponent,
    title: ' تسجيل الدخول',
  },
  // {
  //   path: 'techinical',
  //   component: TechinicalComponent,
  // },
  { path: 'transactions', component:TransactionListComponent, title: 'قائمة المعاملات' },
  { path: 'transactions/:id', component: TransactionDetailComponent, title: 'تفاصيل المعاملة' },
  {
    path: 'technican',
    component: TechinicalComponent,
    title: '  مستخدم جديد',
    canActivate: []
  },
  {
    path: 'services',
    component: ServicesPageComponent,
    title: ' خدماتنا',
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
    path: 'service-confirmation',
    component: ServiceConfirmationComponent,
    title: 'عرض سعر',
  },

  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'offers',
    component: OfferListComponent,
    title: ' الطلبات',
  },
  {
    path: 'client_service',
    component: ClientServiceComponent,
    title: ' خدمه العملاء',
  },

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
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }