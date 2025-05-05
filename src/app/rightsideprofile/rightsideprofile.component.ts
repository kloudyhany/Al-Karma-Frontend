import { Component } from '@angular/core';
import { ComponentLoaderService } from '../technical-profile/ComponentLoaderService';
import { TechPersonalInformationComponent } from '../tech-personal-information/tech-personal-information.component';
import { RequestFormComponent } from '../request-form/request-form.component';
import { RatingAllComponent } from '../rating-all/rating-all.component';
import { ServiceConfirmationComponent } from '../service-confirmation/service-confirmation.component';
import { OfferClientrequestComponent } from '../offer-clientrequest/offer-clientrequest.component';
import { ServicesPageComponent } from '../services-page/services-page.component';

@Component({
  selector: 'app-rightsideprofile',
  templateUrl: './rightsideprofile.component.html',
  styleUrls: ['./rightsideprofile.component.css']
})
export class RightsideprofileComponent {
  TechPersonalInformationComponent = TechPersonalInformationComponent;
  RequestFormComponent = RequestFormComponent;
  RatingAllComponent = RatingAllComponent;
  ServiceConfirmationComponent = ServiceConfirmationComponent;
  OfferClientrequestComponent = OfferClientrequestComponent;
  ServicesPageComponent = ServicesPageComponent;

  constructor(private loaderService: ComponentLoaderService) {}

  open(component: any) {
    console.log('Opening:', component.name);
    this.loaderService.loadComponent(component);
  }
}
