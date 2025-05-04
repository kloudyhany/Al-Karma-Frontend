import { CommonModule } from '@angular/common';
import { Component  , Inject, PLATFORM_ID} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive , CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
}) 
export class HeaderComponent {
  // isLoggedIn = false;

  // constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  // ngOnInit(): void {
  //   if (isPlatformBrowser(this.platformId)) {
  //     const userCookie = this.getCookie('user');
  //     this.isLoggedIn = userCookie !== null && userCookie.trim() !== '';
  //   }
  // }

  // getCookie(name: string): string | null {
  //   const value = `; ${document.cookie}`;
  //   const parts = value.split(`; ${name}=`);
  //   if (parts.length === 2) {
  //     const cookieValue = parts.pop()!.split(';').shift();
  //     return cookieValue ? decodeURIComponent(cookieValue) : null;
  //   }
  //   return null;
  // }
}
