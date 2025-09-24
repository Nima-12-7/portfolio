
import { Component } from '@angular/core';
/* import { title } from 'process'; */
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { 
  constructor(private titleService: Title) {
    this.titleService.setTitle('Nima Khalil');
  }
}

