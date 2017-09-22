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
/**
 * Pet detail component send request on the server with pet id user id and token -> returns all information about the pet.
 */
export class PetDetailComponent implements OnInit {

  // returned pet
  public pet: Pet;
  // enables -> for pet's scans, petEditComponent, petTemperature
  public showScan = false;
  public petDetail= true;
  public petEdit = false;
  public petTemp = false;
  private user: User;

  constructor(private activatedRoute: ActivatedRoute, private petService: PetService, private userService: UserService) { }

  // when component is ready
  ngOnInit() {
    // get user
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
  // change pet's status back to the OK.
  cancelRehome(petID) {
    const token = localStorage.getItem('token');
    this.petService.changeStatusToOK(petID, token, this.user._id).subscribe(response => {this.pet.status = 1; } );
  }
  // show/close pet's scan component
  openScans() {
    this.petDetail = !this.petDetail;
    this.showScan = !this.showScan;
  }
  // show/close pet edit component
  openEdit() {
    this.petDetail = !this.petDetail;
    this.petEdit = !this.petEdit;
  }
  // show/close pet temp component
  openTemp() {
    this.petDetail = !this.petDetail;
    this.petTemp = !this.petTemp;
  }

}
