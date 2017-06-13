import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './app.routes';

import { AppComponent } from './app.component';

import {NgxChartsModule} from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { ElasticService } from './services/elastic.service';
import { FirebaseService } from './services/firebase.service';
import { HeaderComponent } from './layout/header/header.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { AccountPageComponent } from './account/account-page/account-page.component';
import { ResultsComponent } from './home/results/results.component';
import { LoginPageComponent } from './login/login-page/login-page.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyCSOC2Z4xtVRwPIhejiuOvx_yJGFAnYyqg',
  authDomain: 'hr-solution-78ff7.firebaseapp.com',
  databaseURL: 'https://hr-solution-78ff7.firebaseio.com',
  projectId: 'hr-solution-78ff7',
  storageBucket: 'hr-solution-78ff7.appspot.com',
  messagingSenderId: '628530400340'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    MODULE_COMPONENTS,
    AccountPageComponent,
    ResultsComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(MODULE_ROUTES),
    BrowserAnimationsModule,
    NgxChartsModule,
    NgxDatatableModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [ElasticService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
