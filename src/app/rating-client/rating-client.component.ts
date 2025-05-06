import { Component, OnInit} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RatingService } from '../services/rating.service'; 
import{  } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  imports: [ReactiveFormsModule, CommonModule,  FormsModule],
  standalone: true,
  selector: 'app-rating-client', 

  templateUrl: './rating-client.component.html',
  styleUrl: './rating-client.component.css'
})
export class RatingClientComponent implements OnInit {
  // form: FormGroup;
  // ratings: Record<string, number> = {};
  // role: 'client' | 'technician' = 'client'; // سيتم تحديده لاحقًا

  // ratingCategory: any = {}; // سيُملأ بعد تحديد الدور

  // constructor(
  //   private fb: FormBuilder,
  //   private ratingService: RatingService,
  //   private router: Router,
  //   private authService: AuthService // Inject AuthService
  // ) {
  //   this.form = this.fb.group({
  //     comment: ['']
  //   });
  // }

  // ngOnInit(): void {
  //   const path = this.router.url;

  //   if (path.includes('techprofile')) {
  //     this.role = 'technician';
  //   } else {
  //     this.role = 'client';
  //   }
  //   // الحصول على الدور من الخدمة
  //   const role = this.authService.getUserRole();
  //   if (role === 'فني') {
  //     criteria: this.role === 'client' ? [
  //       { key: 'commitment', label: 'الالتزام بتفاصيل طلب الخدمة' },
  //       { key: 'payment', label: 'الالتزام بدفع تكلفة الخدمة' },
  //       { key: 'behavior', label: 'سلوك و تعاون العميل' },
  //     ] 
      
  //   this.ratingCategory = {
  //     title: this.role === 'client' ? 'تقييمات العميل' : 'تقييمات الفني',
  //     key: this.role,
  //  : [
  //       { key: 'commitment', label: 'الالتزام بتفاصيل طلب الخدمة' },
  //       { key: 'punctuality', label: 'الالتزام بالمواعيد المحددة' },
  //       { key: 'quality', label: 'جودة تنفيذ الخدمة' },
  //       { key: 'appearance', label: 'المظهر والنظافة' },
  //       { key: 'behavior', label: 'سلوك و تعاون الفني' }
  //     ]
  //   };
  // }

  // setCriterionRating(key: string, stars: number) {
  //   this.ratings[key] = stars;
  // }

  // submitRating() {
  //   if (this.form.invalid) return;

  //   const ratingPayload = {
  //     technicianId: 1,
  //     clientId: 1,
  //     stars: Object.values(this.ratings).reduce((a, b) => a + b, 0),
  //     comment: this.form.value.comment
  //   };

  //   const request$ = this.role === 'client'
  //     ? this.ratingService.rateTechnician(ratingPayload)
  //     : this.ratingService.rateClient(ratingPayload);

  //   request$.subscribe({
  //     next: () => {
  //     this.router.navigate([''], { state: { ratings: this.ratings } });
  //       alert('تم إرسال التقييم بنجاح');
  //       this.router.navigate(['']); 
  //     },
  //     error: () => alert('حدث خطأ أثناء الإرسال')
  //   });
  // }
  userRole: string = '';
  ratings: { [key: string]: number } = {};
  form: FormGroup;

  ratingCategory = {
    title: '',
    criteria: [] as { key: string; label: string }[]
  };

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      comment: ['']
    });
  }

  ngOnInit(): void {
    this.userRole = this.authService.getUserRole();
    this.loadCriteriaByRole(this.userRole);
  }

  loadCriteriaByRole(role: string): void {
    if (role === 'فني') {
      this.ratingCategory = {
        title: 'تقييم العميل للفني',
        criteria: [
          { key: 'speed', label: 'السرعة في الأداء' },
          { key: 'quality', label: 'جودة العمل' },
          { key: 'behavior', label: 'حسن التعامل' }
        ]
      };
    } else if (role === 'عميل') {
      this.ratingCategory = {
        title: 'تقييم الفني للعميل',
        criteria: [
          { key: 'clarity', label: 'وضوح الطلب' },
          { key: 'communication', label: 'سهولة التواصل' },
          { key: 'commitment', label: 'الالتزام بالوقت' }
        ]
      };
    } 
    
  }

  setCriterionRating(key: string, value: number): void {
    this.ratings[key] = value;
  }

  submitRating(): void {
    if (this.form.valid) {
      const payload = {
        role: this.userRole,
        ratings: this.ratings,
        comment: this.form.value.comment
      
      };
      document.cookie = `rating=${encodeURIComponent(JSON.stringify(payload))}; path=/;`;
      if (payload.role==='عميل')
      this.router.navigate(["clientprofile"]);
    else
    this.router.navigate(["techprofile"]);

      console.log('📤 إرسال التقييم:', payload);
    }
  }
}

