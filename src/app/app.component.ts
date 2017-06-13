import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isLoggedIn = false;

  constructor(public firebaseService: AngularFireAuth, private router: Router) {
    this.firebaseService.authState.subscribe(
      (auth) => {

        if (auth == null) {
          console.log('Not Logged in.');
          this.router.navigate(['login']);
          this.isLoggedIn = false;
        } else {
          console.log('Successfully Logged in.');
          this.isLoggedIn = true;
          this.router.navigate(['']);
        }
      }
    );
  };


}
