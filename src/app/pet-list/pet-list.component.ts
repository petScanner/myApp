import { Component, OnInit } from '@angular/core';
import {PetService} from '../pet.service';
import {UserService} from "../user.service";
import {User} from "../user.model";
import {Pet} from "../pet.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  private user: User;
  public pets: Pet[];

  constructor(private petService: PetService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    if(this.user) {
      this.petService.getPetsByID(this.user._id, localStorage.getItem('token')).subscribe(pets => {
        this.pets = pets;
      });
    }
  }

  clickPetDetail(petID: string) {
    this.router.navigate(['/pet', petID]);
  }

}
