import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login/login.component';
import { Observable, filter, map, of, switchMap } from 'rxjs';
import { SessionInformationService } from './services/session-information.service';

@Component({
  selector: 'sc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'static';
  loading: Observable<boolean> = of(true);
  constructor(
    private router: Router,
    private sessionInformationService: SessionInformationService
  ) {
    this.router.events.pipe(
      map(evnt=>{
        switch (true) {
          case evnt instanceof NavigationStart:
            this.loading = of(true);
            break;
          case evnt instanceof NavigationCancel:
          case evnt instanceof NavigationEnd:
          case evnt instanceof NavigationError: {
            this.loading = of(false);
            break;
          }
          default:
            break;
        }
      })
    );
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.loading = this.sessionInformationService.showLoaderSubject;
    }, 2000);

  }
}
