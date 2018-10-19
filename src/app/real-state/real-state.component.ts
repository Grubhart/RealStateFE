import { Component, OnInit } from '@angular/core';
import {RealState} from '../real-state';
import {STATES} from '../mock-states';

@Component({
  selector: 'app-states',
  templateUrl: './real-state.component.html',
  styleUrls: ['./real-state.component.css']
})
export class RealStateComponent implements OnInit {

  selectedHero: RealState = {
    rowId: 1,
    name: 'Windstorm'
  };
  states = STATES;
  constructor() { }

  ngOnInit() {
  }

  onSelect(state: RealState): void {
    this.selectedHero = state;
  }
}
