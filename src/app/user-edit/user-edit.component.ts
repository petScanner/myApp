import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {User} from'../user.model';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

   public user: User;
   public confirmPhone: number;
   public confirmEmail: string;
   public phone;
   public email;

  constructor( private location: Location, private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    if(this.user) {
      this.confirmEmail = this.user.email;
      this.confirmPhone = this.user.phone;
    }
  }

  backClicked() {
    this.location.back();
  }

  checkPhone() {
    this.phone = (this.confirmPhone === this.user.phone);
  }
  checkEmail() {
    this.email = (this.confirmEmail === this.user.email);
  }



  onClickEdit() {
    console.log(this.user);
    const token = localStorage.getItem('token');
    if (this.email && this.phone) {
      this.userService.editUser(this.user, token).subscribe( response =>
        this.location.back()
      );
    }

  }

}
