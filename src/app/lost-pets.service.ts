import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers, URLSearchParams} from "@angular/http";
import {Pet} from "./pet.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LostPetsService {

  private apiServer = 'https://petscanner-api.herokuapp.com/pets/';

  constructor(private http: Http) {}

  getPetsByID(bounds, token: string): Observable<Pet[]> {
    const headers = new Headers({ 'Authorization': token });
    headers.append('Content-Type', 'application/json');
    let params: URLSearchParams = new URLSearchParams();
    params.set('minLng', bounds.minLng.toString());
    params.set('maxLng', bounds.maxLng.toString());
    params.set('minLat', bounds.minLat.toString());
    params.set('maxLat', bounds.maxLat.toString());
    const options = new RequestOptions({ headers: headers, search: params });
    return this.http.get(this.apiServer , options)
      .map(response => {
          return response.json();
        }
      );
  }

}
