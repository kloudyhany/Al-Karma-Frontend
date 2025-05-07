import { Component, OnInit } from '@angular/core';
import { ComponentLoaderService } from '../technical-profile/ComponentLoaderService';
import { ClientinfoComponent } from '../clientinfo/clientinfo.component';
import { OfferClientrequestComponent } from '../offer-clientrequest/offer-clientrequest.component';
import { RequestFormComponent } from '../request-form/request-form.component';
import { ServiceConfirmationComponent } from '../service-confirmation/service-confirmation.component';
import { RatingClientComponent } from '../rating-client/rating-client.component';
import { RequestsPageComponent } from '../requests-page/requests-page.component';
import{Router}from '@angular/router';


@Component({
  selector: 'app-client-rightside',
  imports: [],
  templateUrl: 
  './client-rightside.component.html',
  styleUrl: './client-rightside.component.css',
  template: `
   <button (click)="open(ClientinfoComponent)">Load Component ClientinfoComponent</button>
    <button (click)="open(OfferClientrequestComponent)">Load Component OfferClientrequestComponent</button>
    <button (click)="open(RequestFormComponent)">Load Component RequestFormComponent</button>
    <button (click)="open(RatingAllComponent)">Load Component RatingAllComponent</button>
    <button (click)="open(ServiceConfirmationComponent)">Load Component ServiceConfirmationComponent</button>
    <button (click)="open(OfferListComponent)">Load Component OfferListComponent</button>
    <button (click)="open(RequestsPageComponent)">Load Component RequestsPageComponent</button>
    <button (click)="logout()">Logout</button>
  `

})
export class ClientRightsideComponent implements OnInit {
constructor(private loaderService: ComponentLoaderService,private Router:Router) {}
  ngOnInit(): void {
  this.sideBar();
  }

  sideBar(){
    const burger = document.querySelector('.hamburger-box') as HTMLElement;
    const menu = document.querySelector('.js-nav')?.parentElement?.querySelector('.menu') as HTMLElement;
    
    if (burger && menu) {
      burger.addEventListener('click', (e: MouseEvent) => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
      });
    }
  }
  ClientinfoComponent = ClientinfoComponent;
  OfferClientrequestComponent = OfferClientrequestComponent;
  RequestFormComponent = RequestFormComponent;
  RatingclientComponent = RatingClientComponent;
  ServiceConfirmationComponent = ServiceConfirmationComponent;
  OfferListComponent = OfferClientrequestComponent;
  RequestsPageComponent=RequestsPageComponent;

   
  

  open(component: any) {
    console.log('Opening:', component.name);
    this.loaderService.loadComponent(component);
}
logout() {
    console.log('Logging out...');
    localStorage.removeItem('token');
    this.Router.navigate(['/login']);

}
}
