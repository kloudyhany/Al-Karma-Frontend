import { CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isLoggedIn = false;
  showNavItem = false; // Property to control nav item visibility

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const userCookie = this.getCookie('user');
      this.isLoggedIn = !!userCookie;
      this.showNavItem = !!userCookie; // Show nav item if cookie exists

      if (userCookie) {
        const user = JSON.parse(userCookie);
        if (user.serviceType === 'فني') {
          this.router.navigate(['/techprofile']);
        } else if (user.serviceType === 'عميل') {
          this.router.navigate(['/clientprofile']);
        }
      }
    }
  }

  getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()!.split(';').shift() || null;
    return null;
  }
}
