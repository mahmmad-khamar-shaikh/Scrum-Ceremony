import { RouterModule, Routes } from '@angular/router';
import { LoginContainerComponent } from './login-container/login-container.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AvtarComponent } from './avtar/avtar.component';
import { TeamComponent } from './team/team.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { CeremonyComponent } from './ceremony/ceremony.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RetroDashboardComponent } from './retro-dashboard/retro-dashboard.component';
import { ScrumDashboardComponent } from './scrum-dashboard/scrum-dashboard.component';
import { StorySelectionComponent } from './estimation/story-selection/story-selection.component';
import { PoDashboardComponent } from './po-dashboard/po-dashboard.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const loginScreenChildren: Routes = [
    { path: 'signin', component: LoginComponent },
    { path: '', component: LoginComponent }];
  const homeScreenChildren: Routes = [
    { path: 'avtar', component: AvtarComponent },
    { path: 'team', component: TeamComponent },
    { path: 'addTeam', component: AddTeamComponent },
    { path: 'ceremony', component: CeremonyComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'dashboard-admin', component: AdminDashboardComponent },
    { path: 'retro-dashboard', component: RetroDashboardComponent },
    { path: 'scrum-dashboard', component: ScrumDashboardComponent },
    { path: 'story-selection', component: StorySelectionComponent },
    { path: 'dashboard-po', component: PoDashboardComponent },
    { path: '', redirectTo: 'team', pathMatch: 'full' }
  ];
  


export const routes: Routes = [
    { path: 'login', component: LoginContainerComponent, children: loginScreenChildren },
    { path: 'home', component: HomeComponent, children: homeScreenChildren },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  
  }
  