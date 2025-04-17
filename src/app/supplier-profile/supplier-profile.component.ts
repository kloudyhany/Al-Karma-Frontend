import { Component } from '@angular/core';

@Component({
  selector: 'app-supplier-profile',
  imports: [],
  templateUrl: './supplier-profile.component.html',
  styleUrl: './supplier-profile.component.css'
})
export class SupplierProfileComponent {

  rating = 5;
  name = '';
  supplyType = '';
  personalIdFront = '';
  personalIdBack = '';
  catalogImages: File[] = [];
  sheet = '';
  address = '';
  whatsappNumber = '';
   // method to handle file uploads
   onFileUpload(event: Event, type: 'catalog' | 'sheet') {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      if (type === 'catalog') {
        this.catalogImages = Array.from(input.files);
      } else {
        this.sheet = input.files[0].name;
      }
    }
  }
}
