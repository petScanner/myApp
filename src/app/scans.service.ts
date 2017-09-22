import { Injectable } from '@angular/core';
import {UserService} from './user.service';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Scan} from './scan.model';


@Injectable()
export class ScansService {

  private apiServer = 'https://pet-scanner-api.herokuapp.com/';

  constructor(private http: Http, private userService: UserService) {}


  getPetScans(petID: string, token: string): Observable<Scan[]> {
    const headers = new Headers({ 'Authorization': token });
    headers.append('Content-Type', 'text/plain' );
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.apiServer + 'pet-scans/' + petID, options)
      .map(response => {
          return response.json();
        }
      );
  }

  getUserScans(userID: string, token: string): Observable<Scan[]> {
    const headers = new Headers({ 'Authorization': token });
    headers.append('Content-Type', 'text/plain' );
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.apiServer + 'user-scans/' + userID, options)
      .map(response => {
          return response.json();
        }
      );
  }


}




