import { Component, OnInit } from '@angular/core';
import {RealState} from '../real-state';
import {RealStateService} from '../real-state.service';
import {Observable, of} from 'rxjs';
import {STATES} from '../mock-states';

@Component({
  selector: 'app-states',
  templateUrl: './real-state.component.html',
  styleUrls: ['./real-state.component.css']
})
export class RealStateComponent implements OnInit {

  selectedState: RealState = {
    rowId: 1,
    address: 'Windstorm',
    specialOffer: 'yes',
    specialFlag: 'X',
    realStateId: 1,
    name: 'name'
  };
  states: RealState[];
  constructor( private realStateService: RealStateService) { }

  ngOnInit() {
    this.getStates();
  }

  onSelect(state: RealState): void {
    this.selectedState = state;
  }
  getStates(): void {
    this.realStateService.getStates().subscribe(states => this.states = states);
  }
}
