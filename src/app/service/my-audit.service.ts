import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:3000/api/audits";

@Injectable({
  providedIn: 'root'
})
export class MyAuditService {

  constructor(private http: HttpClient) { }

  getAuditorias(idPuesto): Observable<any> {
    const url =`${apiUrl}?filter[where][standStandId]=${idPuesto}`;
    return this.http.get(url, httpOptions);
  }
}
