import { Component } from '@angular/core';
import { ComponentLoaderService } from '../technical-profile/ComponentLoaderService';
import { ClientinfoComponent } from '../clientinfo/clientinfo.component';
import { OfferClientrequestComponent } from '../offer-clientrequest/offer-clientrequest.component';
import { RequestFormComponent } from '../request-form/request-form.component';
import { RatingAllComponent } from '../rating-all/rating-all.component';
import { ServiceConfirmationComponent } from '../service-confirmation/service-confirmation.component';
import { OfferListComponent } from '../offer-list/offer-list.component';


@Component({
  selector: 'app-client-rightside',
  imports: [],
  templateUrl: './client-rightside.component.html',
  styleUrl: './client-rightside.component.css',
  template: `
   <button (click)="open(ClientinfoComponent)">Load Component ClientinfoComponent</button>
    <button (click)="open(OfferClientrequestComponent)">Load Component OfferClientrequestComponent</button>
    <button (click)="open(RequestFormComponent)">Load Component RequestFormComponent</button>
    <button (click)="open(RatingAllComponent)">Load Component RatingAllComponent</button>
    <button (click)="open(ServiceConfirmationComponent)">Load Component ServiceConfirmationComponent</button>
    <button (click)="open(OfferListComponent)">Load Component OfferListComponent</button>
  `

})
export class ClientRightsideComponent {
constructor(private loaderService: ComponentLoaderService) {}
  ClientinfoComponent = ClientinfoComponent;
  OfferClientrequestComponent = OfferClientrequestComponent;
  RequestFormComponent = RequestFormComponent;
  RatingAllComponent = RatingAllComponent;
  ServiceConfirmationComponent = ServiceConfirmationComponent;
  OfferListComponent = OfferListComponent;
  

  open(component: any) {
    console.log('Opening:', component.name);
    this.loaderService.loadComponent(component);
}}
