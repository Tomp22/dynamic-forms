import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, merge, mergeMap,catchError } from 'rxjs/operators'

@Injectable()
export class myDataService {
  // define base url
  baseUrl = 'https://www.dnd5eapi.co/api';

  constructor(private http: HttpClient) {}

  private parseResponse(obj:any){
    return Object.keys(obj).map(key => obj[key]);
  }

 // get All
 getAllData(): Observable<any> {
  return this.http.get(this.baseUrl + '/').pipe( catchError(this.erroHandler));
  }


 // get data from API
  getSpecificURL(endppoint:string): Observable<any> {
  return this.http.get(this.baseUrl + '/' + endppoint).pipe( catchError(this.erroHandler));
  }

  getSpecificURLForAsync(endppoint:string){
    return this.http.get('http://localhost:3000' + '/' + endppoint);
    }
    getSpecificURLForAsync2(endppoint:string){
      return this.http.get(this.baseUrl + '/' + endppoint).pipe( catchError(this.erroHandler));
      }



  // Error handler
  erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }
}
