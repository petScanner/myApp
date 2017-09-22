import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pet} from "../pet.model";
import {ScansService} from "../scans.service";
import {Scan} from "../scan.model";

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

  @Input()pet: Pet;
  @Output() close: EventEmitter<any> = new EventEmitter();


  temperatures: Scan[];

  constructor(private scansService: ScansService) { }

  clickBack() {
    this.close.emit('close');
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.scansService.getPetScans(this.pet.id, token).subscribe(temperatures => this.temperatures = temperatures);
  }

}
