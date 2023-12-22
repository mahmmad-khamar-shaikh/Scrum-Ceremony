import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppMaterialModule } from './app-material.module';

@Component({
  selector: 'sc-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppMaterialModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'planning-pokerz';
}
