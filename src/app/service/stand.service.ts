import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:3000/api/stands";

@Injectable({
  providedIn: 'root'
})
export class StandService {

  constructor(private http: HttpClient) { }

  getPuesto(idPuesto:any): Observable<any> {
    const url =`${apiUrl}/${idPuesto}`;
    console.log("URLL" +url);
    return this.http.get(url, httpOptions);
  }
}
