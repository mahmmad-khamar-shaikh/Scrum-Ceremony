import { Component, OnInit } from '@angular/core';
import { LoginInfoService } from '../services/login-info.service';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { SessionInformationService } from '../services/session-information.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user: string ;
  items: MenuItem[];
  home: MenuItem;
  isExpanded = false;
  constructor(
    private router: Router,
    private sessionInformationService: SessionInformationService,
    private authService: AuthService
  ) {

  }
  signOutIcon = faSignOutAlt;
  ngOnInit(): void {
    this.user = this.sessionInformationService.getUserInformation.displayName || 'Guest';
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
  logout(): void {
    this.sessionInformationService.clearSessionObject();
    this.authService.signOut()
      .then(so => {
        this.router.navigate(['/login/signin']);
      })
      .catch(err => {
        console.log(`error occurred while logout ${err}`);
      });

  }

}
