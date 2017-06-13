import { Route } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { AccountPageComponent } from './account/account-page/account-page.component';

export const MODULE_ROUTES: Route[] = [
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'account/:account', component: AccountPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

export const MODULE_COMPONENTS = [
    HomePageComponent
];
