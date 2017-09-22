import { Injectable } from '@angular/core';
import {User} from './user.model';
import {Observable} from 'rxjs/Observable';
import {RequestOptions, Headers, Http} from '@angular/http';

@Injectable()
export class UserService {

  private User: User;

  private apiServer = 'https://petscanner-api.herokuapp.com/pets/';

  constructor(private http: Http) { }

  getUser(): User {
    return this.User;
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
