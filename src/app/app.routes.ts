import { ServiceConfirmationComponent } from './service-confirmation/service-confirmation.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { SupplierProfileComponent } from './supplier-profile/supplier-profile.component';
import { ClientServiceComponent } from './client-service/client-service.component';
import { loginComponent } from './login/login.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { RegComponent } from './reg/reg.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { CreatenewpasswordComponent } from './createnewpassword/createnewpassword.component';
import { TechnicalProfileComponent } from './technical-profile/technical-profile.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { RequestsPageComponent } from './requests-page/requests-page.component';
import { OfferClientrequestComponent } from './offer-clientrequest/offer-clientrequest.component';
import { RightsideprofileComponent } from './rightsideprofile/rightsideprofile.component';
import { RatingClientComponent } from './rating-client/rating-client.component';
import { OffersListComponent } from './offers-list/offers-list.component';
import { RequestDetailsComponent } from './client/pages/request-details/request-details.component';



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
  { path: 'transactions', 
    component: TransactionListComponent,
     title: 'قائمة المعاملات' },
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
    path: 'transactions/id',
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
    path: 'ratingclient',
    component: RatingClientComponent,
    title: '   تقييم  العميل',
  },
 
 
  {
    path: 'requests',
    component: RequestFormComponent,
    title: 'طلبات الخدمة',
  },
  {
    path: 'RequestDetails',
    component: RequestDetailsComponent,
    title: ' تفاصيل الطلب',
  },
  {
    path: 'myrequests',
    component: RequestsPageComponent,
    title: ' طلباتي',
  },
  {
    path : 'rightside' , 
    component : RightsideprofileComponent

  },

  {
    path: 'clientservice',
    component: ClientServiceComponent,
    title: 'خدمة العملاء',
  },
  {
    path: 'service_page',
    component: ServicesPageComponent,
    title: ' خدماتنا',
  },

  {
    path: 'service-confirmation',
    component: ServiceConfirmationComponent,
    title: ' تاكيد الخدمة',
  },
 
  // {
  //   path: 'client_service',
  //   component: ClientServiceComponent,
  //   title: ' خدمه العملاء',
  // },
  {
    path: 'profile',
    component: SupplierProfileComponent,
    title: ' الملف الشخصي',
  },
  {
    path: 'tchnicaloffer',
    component: OfferClientrequestComponent,
    title: '  عرض سعر',
  },
  {
    path: 'offers',
    component: OffersListComponent,
    title: '   قائمة العروض',
  },

  {
    path: 'techprofile',
    component : TechnicalProfileComponent
  },

  { path: '**', component: NotfoundComponent, title: '404 Not Found' },
];
