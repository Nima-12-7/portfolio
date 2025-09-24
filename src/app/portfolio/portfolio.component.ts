import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  // حالة عرض كل ملخص مشروع
  showSummary: { [key: string]: boolean } = {
    project1: false,
    project2: false,
    project3: false
  };

  // دالة تبديل الظهور
  toggleSummary(project: string) {
    this.showSummary[project] = !this.showSummary[project];
  }
}
