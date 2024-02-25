import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { AddTeamComponent } from './add-team/add-team.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AvtarComponent } from './avtar/avtar.component';
import { CeremonyComponent } from './ceremony/ceremony.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StorySelectionComponent } from './estimation/story-selection/story-selection.component';
import { HomeComponent } from './home/home.component';
import { LoginContainerComponent } from './login-container/login-container.component';
import { LoginComponent } from './login/login.component';
import { PoDashboardComponent } from './po-dashboard/po-dashboard.component';
import { RetroDashboardComponent } from './retro-dashboard/retro-dashboard.component';
import { ScrumDashboardComponent } from './scrum-dashboard/scrum-dashboard.component';
import { TeamComponent } from './team/team.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UnderContructionComponent } from './under-contruction/under-contruction.component';
import { LimitedDashboardComponent } from './limited-dashboard/limited-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment.development';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    LoginContainerComponent,
    PageNotFoundComponent,
    AvtarComponent,
    TeamComponent,
    CeremonyComponent,
    AdminDashboardComponent,
    RetroDashboardComponent,
    ScrumDashboardComponent,
    UnderContructionComponent,
    LimitedDashboardComponent,
    PoDashboardComponent,
    StorySelectionComponent,
    AddTeamComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'angular-auth-firebase')
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
