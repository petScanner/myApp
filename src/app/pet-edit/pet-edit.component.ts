import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pet} from '../pet.model';
import {BREEDS} from '../breeds';
import {PetService} from "../pet.service";

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {

  @Input() pet: Pet;
  speciesArray = ['Dog', 'Cat', 'Horse', 'Bird', 'Fish'];
  colorsArray = ['Black', 'Brown', 'Amber', 'White'];
  breeds = BREEDS;
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private petService: PetService) { }

  ngOnInit() {
    console.log(this.pet);
  }

  onClick() {
    const token = localStorage.getItem('token');
    this.petService.editPet(this.pet, token).subscribe(response => console.log(response));
    this.close.emit('close');
  }

}
