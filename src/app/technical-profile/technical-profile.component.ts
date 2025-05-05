import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { ComponentLoaderService } from './ComponentLoaderService';
import { RouterOutlet } from '@angular/router';
import { RightsideprofileComponent } from "../rightsideprofile/rightsideprofile.component";

@Component({
  imports: [RouterOutlet, RightsideprofileComponent],
  templateUrl: './technical-profile.component.html',
  styleUrls: ['./technical-profile.component.css']
})
export class TechnicalProfileComponent implements OnInit  {
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
