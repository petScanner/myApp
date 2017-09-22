import {Component, OnInit} from '@angular/core';
import {LostPetsService} from "../lost-pets.service";
import {Pet} from "../pet.model";



@Component({
  selector: 'app-lost-pets',
  templateUrl: './lost-pets.component.html',
  styleUrls: ['./lost-pets.component.css'],
  providers: [LostPetsService]
})
export class LostPetsComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  point: PetMarker;
  fit
  pets: Pet[];


  constructor(private lostPetsService: LostPetsService) {
  }

  ngOnInit() {
    //this.getLocation();


  }

  change($event) {
    const bound = $event;
    const boundObject = {minLng: bound.b.b, maxLng: bound.b.f, minLat: bound.f.b, maxLat: bound.f.f};
    const token = localStorage.getItem('token');
    this.lostPetsService.getPetsByID(boundObject, token).subscribe(response => {
      this.pets = response;
      console.log(this.pets);
      if (this.pets.length !== 0) {
        this.point = {
          lng: this.pets[0].lostInfo.location.coordinates[0],
          lat: this.pets[0].lostInfo.location.coordinates[1],
          draggable: false, pet: this.pets[0]};
      }

    });
  }

  getLocation() {
    if ('geolocation' in navigator) {
      let self = this;
      navigator.geolocation.getCurrentPosition(function (position) {
        self.lng = position.coords.longitude;
        self.lat = position.coords.latitude;
      });
    } else {
      console.log('fail');
    }
  }
}


// just an interface for type safety.
interface PetMarker {
  lat: number;
  lng: number;
  pet: Pet;
  draggable?: boolean;
}
