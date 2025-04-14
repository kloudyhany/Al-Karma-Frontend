import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-assesment',
  imports: [FormsModule, CommonModule],
  templateUrl: './client-assesment.component.html',
  styleUrl: './client-assesment.component.css'

})
export class ClientAssesmentComponent {
  qualityMetrics = [
    { name: ' الالتزام من العميل', value: 85 },
    { name: '  المرونه في التعامل', value: 78 },
    { name: 'رضا الفني', value: 92 },
    { name: 'اكتمال المهام', value: 88 }
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
