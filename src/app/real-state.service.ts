import { Injectable } from '@angular/core';
import {RealState} from './real-state';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError,map,tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RealStateService {
  private realStateUrl = 'http://localhost:8080/search?address=55&specialOffer=false';

  constructor(private http: HttpClient) {

  }
  getStates(): Observable<RealState[]> {
    return this.http.get<RealState[]>(this.realStateUrl)
      .pipe(
        catchError(this.handleError('getStates',[]))
      );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead



      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}


