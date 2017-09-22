import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http, RequestOptions, Headers} from '@angular/http';
import {User} from './user.model';

@Injectable()
export class RegistrationService {
  private apiServer = 'https://petscanner-api.herokuapp.com/auth/';

  constructor(private http: Http) {}

  createUser(user: User): Observable<any> {
    const headers = new Headers();
    const body = JSON.stringify(user);
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiServer + 'register', body, options)
      .map(response => {
        console.log(response);
      });
  }
}
