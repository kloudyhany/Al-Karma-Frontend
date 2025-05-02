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
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { RatingAllComponent } from './rating-all/rating-all.component';
import { RegComponent } from './reg/reg.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { CreatenewpasswordComponent } from './createnewpassword/createnewpassword.component';
import { TechnicalProfileComponent } from './technical-profile/technical-profile.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { RequestsPageComponent } from './requests-page/requests-page.component';



export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: loginComponent,
    title: ' تسجيل الدخول',
  },
  { path: 'transactions', component: TransactionListComponent, title: 'قائمة المعاملات' },
  {
    path: 'registration',
    component: RegComponent,
    title: 'تسجيل حساب جديد',
  },
  {
    path : 'resetpassword',
    component : ResetpasswordComponent,
    title : 'تغيير كلمة المرور',

  },
  {
    path : 'createnewpassword' , 
    component : CreatenewpasswordComponent,
    title : 'إنشاء كلمة مرور جديدة',
  },
  {
    path: 'services',
    component: ServicesPageComponent,
    title: ' خدماتنا',
  },

  {
    path: 'transactions/:id',
    component: TransactionDetailComponent,
    title: 'تفاصيل المعاملة',
  },


  {
    path: 'clientprofile',
    component: ClientProfileComponent,
    title: ' الملف الشخصي للعميل',
  },
  {
    path: 'technicalprofile',

    component: TechnicalProfileComponent,
    title: ' الملف الشخصي للفني ',
  },
  {
    path: 'client_requests',
    component: RequestFormComponent,
    title: 'طلبات الخدمة',
  },
 
  {
    path: 'requests',
    component: RequestFormComponent,
    title: 'طلبات الخدمة',
  },
  {
    path: 'myrequests',
    component: RequestsPageComponent,
    title: ' طلباتي',
  },

  {
    path: 'clientservice',
    component: ClientServiceComponent,
    title: 'خدمة العملاء',
  },

  {
    path: 'service-confirmation',
    component: ServiceConfirmationComponent,
    title: 'عرض سعر',
  },
  {
    path: 'rating',
    component: RatingAllComponent,
    title: 'تقييمات',
  },
  {
    path: 'client_service',
    component: ClientServiceComponent,
    title: ' خدمه العملاء',
  },
  { path: 'offers', component: OfferListComponent, title: ' الطلبات' },
  {
    path: 'profile',
    component: SupplierProfileComponent,
    title: ' الملف الشخصي',
  },
  {
    path: 'techprofile',
    component : TechnicalProfileComponent
  },

  { path: '**', component: NotfoundComponent, title: '404 Not Found' },
];
