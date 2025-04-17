import { ServiceConfirmationComponent } from './service-confirmation/service-confirmation.component';
import { Routes } from '@angular/router';
import { TechinicalComponent } from './techinical/techinical.component';
import { SupplierComponent } from './supplier/supplier.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OfferCardComponent } from './offers/offer-card/offer-card.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { SupplierProfileComponent } from './supplier-profile/supplier-profile.component';
import { ClientServiceComponent } from './client-service/client-service.component';
import { ServiceTypeComponent } from './service-type/service-type.component';

export const routes: Routes = [
    {
        path: 'techinical',
        component : TechinicalComponent,
        title: 'تسجيل الفني'
    } ,
  

    {
        path: 'Registeration',
        component : ServiceTypeComponent,
        title: ' نوع الخدمه'
    } ,
    // {
    //     path :'deleivery'
    //     , component : DeleiveryComponent ,
    //     title: 'تسجيل السائق'
    // } , 
    {
        path: 'supplier' , 
        component : SupplierComponent , 
        title: 'تسجيل المورد'
    },
    {
      path: 'clientprofile' ,
      component : ClientProfileComponent , 
      title: ' الملف الشخصي للعميل'
  },
  {
   path: 'client_service' ,
   component : ClientServiceComponent , 
   title: 'خدمة العملاء'
},
  
    {
        path: 'serviceconfirmation' ,
        component : ServiceConfirmationComponent ,
        title: "عرض سعر"
        },

 { path: '', 
    component: HomeComponent 
 },

 { path: 'offers', 
    component: OfferCardComponent,
    title: ' الطلبات' 
 },
 { path: 'profile', 
    component: SupplierProfileComponent,
    title: ' الملف الشخصي' 
 },





 { path: '**', 
    component: NotfoundComponent,
     title: '404 Not Found' } ,

];
