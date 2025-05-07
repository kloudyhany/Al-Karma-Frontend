import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentLoaderService } from '../technical-profile/ComponentLoaderService';
import { TechPersonalInformationComponent } from '../tech-personal-information/tech-personal-information.component';
import { RequestFormComponent } from '../request-form/request-form.component';
import { RatingClientComponent } from '../rating-client/rating-client.component';
import { ServiceConfirmationComponent } from '../service-confirmation/service-confirmation.component';
import { OfferClientrequestComponent } from '../offer-clientrequest/offer-clientrequest.component';
import { ServicesPageComponent } from '../services-page/services-page.component';

@Component({
  selector: 'app-rightsideprofile',
  templateUrl: './rightsideprofile.component.html',
  styleUrls: ['./rightsideprofile.component.css']
})
export class RightsideprofileComponent implements OnInit {
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
  TechPersonalInformationComponent = TechPersonalInformationComponent;
  RequestFormComponent = RequestFormComponent;
  RatingclientComponent = RatingClientComponent;
  ServiceConfirmationComponent = ServiceConfirmationComponent;
  OfferClientrequestComponent = OfferClientrequestComponent;
  ServicesPageComponent = ServicesPageComponent;
  constructor(private loaderService: ComponentLoaderService, private router: Router) {}

  open(component: any) {
    console.log('Opening:', component.name);
    this.loaderService.loadComponent(component);
  }

  logout() {
    console.log('Logging out...');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
