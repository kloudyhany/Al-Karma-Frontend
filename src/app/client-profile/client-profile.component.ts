import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentLoaderService } from '../technical-profile/ComponentLoaderService';
import { ClientRightsideComponent } from '../client-rightside/client-rightside.component';

@Component({
  selector: 'app-client-profile',
  imports: [RouterOutlet  , ClientRightsideComponent],
  templateUrl:'./client-profile.component.html',
  styleUrl: './client-profile.component.css'
})
export class ClientProfileComponent  {
  @ViewChild('leftAsideContainer', { read: ViewContainerRef }) leftAsideContainer!: ViewContainerRef;

  constructor(private loaderService: ComponentLoaderService) {}

  ngOnInit() {
    // Subscribe to component change requests
    this.loaderService.component$.subscribe(component => {
      this.leftAsideContainer.clear(); // Remove old component
      this.leftAsideContainer.createComponent(component); // Add new one
    });
  }
}