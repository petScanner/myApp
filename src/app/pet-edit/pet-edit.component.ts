import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pet} from '../pet.model';
import {BREEDS} from '../breeds';
import {PetService} from '../pet.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
/**
 * Change information about the pet
 */
export class PetEditComponent implements OnInit {

  // edited pet
  @Input() pet: Pet;
  // array of species types
  speciesArray = ['Dog', 'Cat', 'Horse', 'Bird', 'Fish'];
  // array of colors types
  colorsArray = ['Black', 'Brown', 'Amber', 'White'];
  // Breeds array
  breeds = BREEDS;
  // Event emitter to close edit component
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private petService: PetService) { }

  ngOnInit() {
  }

  onClick() {
    // get user's token
    const token = localStorage.getItem('token');
    this.petService.editPet(this.pet, token).subscribe(response => console.log(response));
    this.close.emit('close');
  }

}
