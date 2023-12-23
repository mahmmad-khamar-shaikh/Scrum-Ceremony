import { RouterModule, Routes } from '@angular/router';
import { LoginContainerComponent } from './login-container/login-container.component';
import { NgModule } from '@angular/core';

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
  