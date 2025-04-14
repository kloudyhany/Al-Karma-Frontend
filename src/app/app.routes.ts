import { ServiceConfirmationComponent } from './service-confirmation/service-confirmation.component';
import { Routes } from '@angular/router';
import { TechinicalComponent } from './techinical/techinical.component';
import { DeleiveryComponent } from './deleivery/deleivery.component';
import { SupplierComponent } from './supplier/supplier.component';

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
    {
        path: 'serviceconfirmation' ,
        component : ServiceConfirmationComponent ,
        title: "عرض سعر"
        }
];
