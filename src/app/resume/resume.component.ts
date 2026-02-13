
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
   @Input() showSkillsSection: boolean = true;
  showWork = false;
  showEducation = false;
  showSkills = false;
  showCyberSkills = false;
  showComputerSkills = false;
  showCertificates = false;
  showData = false;
  showLanguages = false;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Nima Khalil');
  }

  toggle(section: string) {
    if (section === 'work') this.showWork = !this.showWork;
    if (section === 'education') this.showEducation = !this.showEducation;
    if (section === 'skills') this.showSkills = !this.showSkills;
    if (section === 'Cybersecurity skills') this.showCyberSkills = !this.showCyberSkills;
    if (section === 'Data') this.showData = !this.showData;
    if (section === 'computer') this.showComputerSkills = !this.showComputerSkills;
    if (section === 'certificates') this.showCertificates = !this.showCertificates;
    if (section === 'languages') this.showLanguages = !this.showLanguages;
  }


  //   زر تحميل السيرة الذاتيه 
  downloadFile() {
    if (typeof document !== 'undefined') {
      const link = document.createElement('a');
      link.setAttribute('target', '_blank');
      link.setAttribute('href', 'assets/Nima_resume.pdf');
      link.setAttribute('download', 'Nima_resume.pdf');
      link.click();
      link.remove();
    }
  }
}
