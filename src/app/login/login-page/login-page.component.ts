import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public firebaseService : FirebaseService) { }

  ngOnInit() {
  }

  login() {
    this.firebaseService.login();
  }

  logout () {
    this.firebaseService.logout();
  }
}
