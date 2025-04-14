import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quality-assesment',
  imports: [FormsModule],
  templateUrl: './quality-assesment.component.html',
  styleUrl: './quality-assesment.component.css'
})
export class QualityAssesmentComponent {
  qualityMetrics = [
    { name: 'جودة الأداء', value: 85 },
    { name: 'سرعة الاستجابة', value: 78 },
    { name: 'رضا العملاء', value: 92 },
    { name: 'إتمام المهام', value: 88 }
  ];

  updateQualityMetric(metricName: string, newValue: number) {
    const metric = this.qualityMetrics.find(m => m.name === metricName);
    if (metric) {
      metric.value = +newValue; 
      console.log(`تم تحديث "${metricName}" إلى ${metric.value}%`);
      // هنا نرسل  القيمة للسيرفر 
    }
  }

}
