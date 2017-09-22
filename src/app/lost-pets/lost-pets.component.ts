import {Component, OnInit} from '@angular/core';
import {LostPetsService} from "../lost-pets.service";
import {Pet} from "../pet.model";


@Component({
  selector: 'app-lost-pets',
  templateUrl: './lost-pets.component.html',
  styleUrls: ['./lost-pets.component.css'],
  providers: [LostPetsService]
})

/**
 * Example of the map with lost pets markers, when user changes viewable area send request to the server for lost pet in
 * selected area.
 */
export class LostPetsComponent implements OnInit {

  title: string = 'Lost Pets';
  locationFail: string;
  lat: number = 51.678418;
  lng: number = 7.809007;
  point: PetMarker;
  pets: Pet[];


  constructor(private lostPetsService: LostPetsService) {
  }

  // when component is ready call function to get users location
  ngOnInit() {
    this.getLocation();
  }

  // call when user change bounds (viewable area)
  // send request to the server for lost pets
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
          draggable: false, pet: this.pets[0]
        };
      }

    });
  }

  /**
   * if browser supports geolocation and is enabled
   */
  getLocation() {
    if ('geolocation' in navigator) {
      let self = this;
      this.locationFail = '';

      navigator.geolocation.getCurrentPosition(function (position) {
        self.lng = position.coords.longitude;
        self.lat = position.coords.latitude;
      }, function (error) {
        self.locationFail = `Please enable location services or use supported web browser to get your possition. 
           Error type: ` + error.message;
      });

    } else {
      this.locationFail = 'Please enable location services or use supported web browser to get your possition'
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
