import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgClass } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface RatingSection {
  title: string;
  key: string;
  criteria: { key: string; label: string }[];
}

@Component({
  selector: 'app-rating-all',
  imports: [NgClass, ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './rating-all.component.html',
  styleUrl: './rating-all.component.css'
})
export class RatingAllComponent {
  form: FormGroup;
  sections: RatingSection[] = [
    {
      title: 'تقييمات الفني',
      key: 'technician',
      criteria: [
        { key: 'commitment', label: 'الالتزام بتفاصيل طلب الخدمة' },
        { key: 'punctuality', label: 'الالتزام بالمواعيد المحددة' },
        { key: 'quality', label: 'جودة تنفيذ الخدمة' },
        { key: 'appearance', label: 'المظهر والنظافة' },
        { key: 'behavior', label: 'سلوك و تعاون الفني' }
      ]
    },
    {
      title: 'تقييمات العميل',
      key: 'client',
      criteria: [
        { key: 'commitment', label: 'الالتزام بتفاصيل طلب الخدمة' },
        { key: 'payment', label: 'الالتزام بدفع تكلفة الخدمة' },
        { key: 'behavior', label: 'سلوك و تعاون العميل' }
      ]
    },
    {
      title: 'تقييمات المورد',
      key: 'supplier',
      criteria: [
        { key: 'commitment', label: 'الالتزام بتفاصيل طلب التوريد' },
        { key: 'price', label: 'الالتزام بعرض السعر المقدم' },
        { key: 'timing', label: 'الالتزام بالمواعيد المحدده' },
        { key: 'quality', label: 'جودة خامات التوريدات' },
        { key: 'behavior', label: 'سلوك و تعاون المورد' }
      ]
    },
    {
      title: 'تقييمات التوصيل',
      key: 'delivery',
      criteria: [
        { key: 'commitment', label: 'الالتزام بتفاصيل طلب التوصيل' },
        { key: 'price', label: 'الالتزام بعرض السعر المقدم' },
        { key: 'timing', label: 'الالتزام بالمواعيد المحدده' },
        { key: 'safety', label: 'سلامة ما تم توصيله' },
        { key: 'behavior', label: 'السلوك و التعاون في الخدمة' }
      ]
    }
  ];

  constructor(private formbuilder: FormBuilder) {
    const controls: any = {};
    this.sections.forEach(section => {
      section.criteria.forEach(crit => {
        controls[`${section.key}_${crit.key}`] = 0;
      });
    });
    this.form = this.formbuilder.group(controls);
  }

  setRating(controlName: string, value: number) {
    this.form.get(controlName)?.setValue(value);
  }

  submit() {
    console.log(this.form.value);
    
    
   
  }

}
