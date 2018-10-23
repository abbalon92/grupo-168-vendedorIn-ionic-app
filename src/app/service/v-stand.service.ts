import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { AppSettings } from '../constant'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl =AppSettings.API_HOST+"VStandbyusers";

@Injectable({
  providedIn: 'root'
})
export class VStandService {

  constructor(private http: HttpClient) { }
  
  getStandUser(id:any): Observable<any> {
    const url =`${apiUrl}?filter[where][userId]=${id}`;
    return this.http.get(url, httpOptions);
  }
}
