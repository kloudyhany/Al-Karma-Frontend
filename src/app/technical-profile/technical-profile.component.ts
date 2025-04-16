import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technical-profile',
  imports: [CommonModule],
  templateUrl: './technical-profile.component.html',
  styleUrl: './technical-profile.component.css'
})
export class TechnicalProfileComponent {

  rating = 5;

}
