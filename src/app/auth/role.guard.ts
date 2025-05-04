import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: any): boolean {
    const userData = localStorage.getItem('userData');
    const expectedRoles = route.data?.roles as string[];

    if (userData) {
      const user = JSON.parse(userData);
      if (expectedRoles.includes(user.serviceType)) {
        return true;
      }
    }

    alert('ليس لديك صلاحية للدخول إلى هذه الصفحة.');
    this.router.navigate(['/login']);
    return false;
  }
}
