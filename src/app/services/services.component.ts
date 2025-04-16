import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    { title: 'مباني', icon: 'fa-solid fa-building' },
    { title: 'سباكة', icon: 'fa-solid fa-faucet' },
    { title: 'كهرباء', icon: 'fa-solid fa-bolt' },
    { title: 'ارضيات و حوائط', icon: 'fa-solid fa-border-all' },
    { title: 'دهانات', icon: 'fa-solid fa-paint-roller' },
    { title: 'نجارة', icon: 'fa-solid fa-hammer' },
    { title: 'الالوميتال و الزجاج', icon: 'fa-solid fa-window-maximize' },
    { title: 'حدادة كريتال', icon: 'fa-solid fa-tools' },
    { title: 'العزل', icon: 'fa-solid fa-shield-halved' },
    { title: 'عمالة عادية', icon: 'fa-solid fa-users' },
    { title: 'جبس بورد', icon: 'fa-solid fa-layer-group' },
    { title: 'التنظيف', icon: 'fa-solid fa-broom' }
  ];

}
