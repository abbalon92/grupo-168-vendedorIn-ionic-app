import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { AppSettings } from "../constant";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = AppSettings.API_HOST+"stands";

@Injectable({
  providedIn: 'root'
})
export class StandService {

  constructor(private http: HttpClient) { }

  getPuesto(idPuesto:any): Observable<any> {
    const url =`${apiUrl}/${idPuesto}`;
    return this.http.get(url, httpOptions);
  }
}
