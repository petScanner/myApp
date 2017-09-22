import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Scan} from '../scan.model';
import {ScansService} from '../scans.service';

@Component({
  selector: 'app-pet-scan',
  templateUrl: './pet-scan.component.html',
  styleUrls: ['./pet-scan.component.css']
})
export class PetScanComponent implements OnInit {

  @Input() Name: string;
  @Input() ID: string;
  @Input() RegisteredDate: Date;
  public scans: Scan[];
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor(private scansService: ScansService) { }

  clickClose() {
    this.close.emit('test');
  }

  getScans(petID: string, token: string) {
    this.scansService.getPetScans(petID, token).subscribe(scans => this.scans = scans);
  }



  ngOnInit() {
    const token = localStorage.getItem('token');
    this.getScans(this.ID, token);
  }

}
