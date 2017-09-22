import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../login.service";

@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.component.html',
  styleUrls: ['./login-email.component.css'],
  providers: [LoginService]
})
export class LoginEmailComponent implements OnInit {

  email;
  password;
  constructor(private router: Router, private loginService: LoginService) { }

  checkEmail(email) {
    this.email = (this.validateEmail(email));
  }

  checkPassword(password) {
    if ((password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/))) {
      this.password = true;
    }else {
      this.password = false;
    }
  }

  logIn(email, password) {
    if (this.password && this.email) {
      this.loginService.logIn(email, password).subscribe(response => {
        if (response)
          this.router.navigate(['home']);
        });
    }

  }

  ngOnInit() {
  }

  validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

}
