import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Scan} from "../scan.model";
import {ScansService} from "../scans.service";
import {UserService} from "../user.service";
import {User} from "../user.model";

@Component({
  selector: 'app-scans',
  templateUrl: './scans.component.html',
  styleUrls: ['./scans.component.css']
})
export class ScansComponent implements OnInit {

  public scans: Scan[];
  private user: User;

  constructor(private location: Location, private scansService: ScansService, private userService: UserService) { }

  ngOnInit() {
    this.user =  this.userService.getUser();
    if(this.user) {
      const token = localStorage.getItem('token');
      this.getScans(this.user._id, token);
    }
  }

  getScans(userID: string, token: string) {
    this.scansService.getUserScans(userID, token).subscribe(scans => this.scans = scans);
  }
  clickBack() {
    this.location.back();
  }

}
