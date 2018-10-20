import { Injectable } from '@angular/core';
import {RealState} from './real-state';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RealStateService {
  private realStateUrl = 'http://localhost:8080/search?address=55&specialOffer=false';

  constructor(private http: HttpClient) {

  }
  getStates(): Observable<RealState[]> {
    return this.http.get<RealState[]>(this.realStateUrl);
  }
}


