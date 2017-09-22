import { Injectable } from '@angular/core';
import {UserService} from './user.service';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Pet} from './pet.model';


@Injectable()
export class PetService {

  private apiServer = 'https://pet-scanner-api.herokuapp.com/pets/';

  constructor(private http: Http, private userService: UserService) {}

  getPetsByID(userID: string, token: string): Observable<Pet[]> {;
    const headers = new Headers({ 'Authorization': token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.apiServer + 'user-pets/' + userID, options)
      .map(response => {
        return response.json();
        }
      );
  }

  getPetByID(petID: string, userID: string, token: string): Observable<Pet> {
    const headers = new Headers({ 'Authorization': token });
    headers.append('Content-Type', 'text/plain' );
    const options = new RequestOptions({ headers: headers });
    return this.http.get(this.apiServer + 'pet-owner-detail/' + petID + '?user_id=' + userID, options)
      .map(response => {
          return response.json();
        }
      );
  }

  editPet(pet: Pet, token: string): Observable<any> {
    const headers = new Headers({ 'Authorization': token });
    const body = JSON.stringify(pet);
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.put(this.apiServer + 'pet-edit', body, options)
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

  changeStatusToOK(petID: string, token: string, userID: string): Observable<any> {
    const headers = new Headers({ 'Authorization': token });
    const body = JSON.stringify({petID: petID, user_id: userID});
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.put(this.apiServer + 'cancel-rehome', body, options)
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




