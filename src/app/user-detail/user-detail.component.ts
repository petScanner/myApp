import { Component, OnInit } from '@angular/core';
import {User} from '../user.model';
import {Location} from '@angular/common';
import {UserService} from "../user.service";


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor( private location: Location, private userSerivce: UserService) { }

  ngOnInit() {
    this.user = this.userSerivce.getUser();
   /* const _user = JSON.parse(localStorage.getItem('currentUser')).user;
    this.user = new User(_user.firstName, _user.lastName, _user.address.houseNumber, _user.address.street, _user.address.postalCode,
      _user.address.city, _user.address.country, _user.phone, _user.email);*/
  }
  backClicked() {
    this.location.back();
  }

}
