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
  showNavItem = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const userData = this.getFromLocalStorage('user');
      this.isLoggedIn = !!userData;
      this.showNavItem = !!userData;

      if (userData) {
        const user = JSON.parse(userData);
        if (user.serviceType === 'فني') {
          this.router.navigate(['/techprofile']);
        } else if (user.serviceType === 'عميل') {
          this.router.navigate(['/clientprofile']);
        }
      }
    }
  }

  getFromLocalStorage(key: string): string | null {
    return localStorage.getItem(key);
  }
}
