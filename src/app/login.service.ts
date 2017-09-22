import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http, RequestOptions, Headers} from '@angular/http';
import {User} from './user.model';
import {UserService} from './user.service';

@Injectable()
export class LoginService {
  private apiServer = 'https://pet-scanner-api.herokuapp.com/auth/';


  constructor(private http: Http, private userService: UserService) {}

  logIn(email, password): Observable<any> {
    const headers = new Headers();
    const body = JSON.stringify({email: email, password: password});
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin' , 'https://petscanner.github.io');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiServer + 'login', body, options)
      .map(response => {
        if (response.ok) {
          if (response.json().data) {
            const fetchData = response.json().data[0];
            this.userService.setUser(fetchData.user);
            localStorage.setItem('token', fetchData.token);
            return response.ok;
          }else {
            return false;
          }
        }
      });
  }


}
