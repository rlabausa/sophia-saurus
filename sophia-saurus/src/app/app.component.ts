declare var google: any;

import { Component, NgZone, OnInit } from '@angular/core';
import { environment } from 'environment';
import { User } from './models/user.model';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  readonly SIGN_IN_BUTTON_ID = 'buttonDiv';
  title = 'sophia-saurus';
  authenticated: boolean = false;

  constructor(
    private ngZone: NgZone,
    private authSvc: AuthService
  ) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {

    // wait for Google JavaScript library to load 
    window.onload = () => {
      google.accounts.id.initialize({
        client_id: environment.GOOGLE_CLIENT_ID,
        callback: this.handleCredentialResponse.bind(this)
      });

      google.accounts.id.renderButton(
        document.getElementById(this.SIGN_IN_BUTTON_ID),
        { theme: 'filled_black', size: 'large' }  // customization attributes
      );

      google.accounts.id.prompt(); // display the One Tap dialog
    }

  }

  handleCredentialResponse(response: any) {
    const jwt = response.credential;
    const jwtArray = jwt.split('.');

    const header: string = window.atob(jwtArray[0]);
    const payload: string = window.atob(jwtArray[1]);

    const token = JSON.parse(payload);

    if (token.email_verified) {
      // hide button when authenticated
      document.getElementById(this.SIGN_IN_BUTTON_ID)?.setAttribute('hidden', 'hidden');

      // pass user data to the application
      const user = new User(token.name, token.email, jwt);
      this.authSvc.currentUser$.next(user); 

      console.log(user);
    }
  }

  decodeToken(jwt: string) {
    const jwtArray = jwt.split('.');
    const header = jwtArray[0];
    const payload = jwtArray[1];

    console.log('header: ', header);
    console.log('payload: ', payload);
  }


}
