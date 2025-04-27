import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  redirectToOfferList() {
    window.location.href = '/offers'; 
    
  }
  redirectToServices() {
    window.location.href = '/services'; 
  }
  redirectToLogin() {
    window.location.href = '/login'; 
  }

}
