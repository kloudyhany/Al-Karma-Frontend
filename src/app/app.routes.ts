import { ServiceConfirmationComponent } from './service-confirmation/service-confirmation.component';
import { Routes } from '@angular/router';
import { TechinicalComponent } from './techinical/techinical.component';
import { DeleiveryComponent } from './deleivery/deleivery.component';
import { SupplierComponent } from './supplier/supplier.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OfferCardComponent } from './offers/offer-card/offer-card.component';

export const routes: Routes = [
    {
        path: 'techinical',
        component : TechinicalComponent,
        title: 'تسجيل الفني'
    } , 
    {
        path :'deleivery'
        , component : DeleiveryComponent ,
        title: 'تسجيل السائق'
    } , 
    {
        path: 'supplier' , 
        component : SupplierComponent , 
        title: 'تسجيل المورد'
    },
<<<<<<< HEAD
    {
        path: 'serviceconfirmation' ,
        component : ServiceConfirmationComponent ,
        title: "عرض سعر"
        }
=======
 {
    path: 'footer' , 
        component : FooterComponent , 
 },

 { path: '', 
    component: HomeComponent 
 },

 { path: 'offers', 
    component: OfferCardComponent,
    title: ' الطلبات' 
 },





 { path: '**', 
    component: NotfoundComponent,
     title: '404 Not Found' } ,

>>>>>>> 44e61c9a03a841c8937cf0e0a08eb39445b149b3
];
