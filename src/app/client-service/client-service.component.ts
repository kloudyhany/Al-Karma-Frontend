import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-client-service',
  imports: [CommonModule,FormsModule ],
  templateUrl: './client-service.component.html',
  styleUrl: './client-service.component.css'
})
export class ClientServiceComponent {
  messageData = {
    message: ''
  };

  constructor(private router: Router) {}

  sendMessage() {
    const message = this.messageData.message;
    
    Swal.fire({
      icon: 'success',
      title: 'تم الإرسال',
      text:'تم إرسال الرسالة بنجاح! و سيتم التواصل معك قريبا',
      confirmButtonText: 'حسناً'
    });

    this.router.navigate(['/']);
  }

}
