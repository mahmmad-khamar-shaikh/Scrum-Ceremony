import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login/login.component';

@Component({
  selector: 'sc-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppMaterialModule, AppRoutingModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'planning-pokerz';
}
