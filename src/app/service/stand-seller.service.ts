import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:3000/api/stand_sellers";

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
