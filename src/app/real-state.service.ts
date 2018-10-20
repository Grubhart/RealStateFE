import { Injectable } from '@angular/core';
import {RealState} from './real-state';
import {STATES} from './mock-states';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RealStateService {

  constructor(private http: HttpClient) {

  }
  getStates(): Observable<RealState[]> {
    return of(STATES);
  }
}


