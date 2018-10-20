import { Component, OnInit } from '@angular/core';
import {RealState} from '../real-state';
import {RealStateService} from '../real-state.service';

@Component({
  selector: 'app-states',
  templateUrl: './real-state.component.html',
  styleUrls: ['./real-state.component.css']
})
export class RealStateComponent implements OnInit {
  realStates: RealState[];
  query: string;
  specialOffer: boolean;

  constructor(private realStateService: RealStateService) {
  }

  ngOnInit() {
    this.specialOffer = false;
    this.search();
  }
  getStates(): void {
    this.realStateService.getStates().subscribe(states => this.realStates = states);
  }

  search(): void {
    this.realStateService.getStates(this.query, this.specialOffer).subscribe(states => this.realStates = states);
  }
}
