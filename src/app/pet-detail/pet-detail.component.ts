import { Component, OnInit } from '@angular/core';
import {Pet} from '../pet.model';
import {PetService} from '../pet.service';
import {UserService} from '../user.service';
import {User} from '../user.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {

  public pet: Pet;
  public showScan = false;
  public petDetail= true;
  public petEdit = false;
  public petTemp = false;
  private user: User;

  constructor(private activatedRoute: ActivatedRoute, private petService: PetService, private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    let petID;
    this.activatedRoute.params.subscribe(params => {
      petID = params.id;
      this.getPet(this.user._id, petID, localStorage.getItem('token'));
    });
  }


  getPet(userID, petID, token) {
    this.petService.getPetByID(petID, userID, token).subscribe(pet => {
      this.pet = pet;
    });
  }

  cancelRehome(petID) {
    const token = localStorage.getItem('token');
    this.petService.changeStatusToOK(petID, token, this.user._id).subscribe(response => {this.pet.status = 1; } );
  }



  openScans() {
    this.petDetail = !this.petDetail;
    this.showScan = !this.showScan;
  }

  openEdit() {
    this.petDetail = !this.petDetail;
    this.petEdit = !this.petEdit;
  }
  openTemp() {
    this.petDetail = !this.petDetail;
    this.petTemp = !this.petTemp;
  }

}
