import { Injectable } from '@angular/core';
import {User} from './user.model';
import {Observable} from 'rxjs/Observable';
import {RequestOptions, Headers, Http} from '@angular/http';
import {Router} from "@angular/router";

@Injectable()
export class UserService {

  private User: User;

  private apiServer = 'https://pet-scanner-api.herokuapp.com/users/';

  constructor(private http: Http, private router: Router) { }

  getUser(): User {
    if (this.User) {
      return this.User;
    } else {
      this.router.navigate(['welcome']);
    }
  }

  setUser(user: User) {
    this.User = user;
  }


  editUser(user: User, token: string): Observable<any> {
    const headers = new Headers({ 'Authorization': token });
    const body = JSON.stringify(user);
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.put(this.apiServer + 'user-edit', body, options)
      .map(response => {
        if (response.ok) {
          if (response.json().data) {
            console.log(response);
          }else {
            return false;
          }
        }
      });
  }

}
