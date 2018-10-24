import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { AppSettings } from "../constant";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = AppSettings.API_HOST+"stand_sellers";

@Injectable({
  providedIn: 'root'
})
export class StandSellerService {

  constructor(private http: HttpClient) { }

  getStandSeller(idSeller:any): Observable<any> {
    const url =`${apiUrl}?filter[where][sellerId]=${idSeller}`;
    return this.http.get(url, httpOptions);
  }
}
