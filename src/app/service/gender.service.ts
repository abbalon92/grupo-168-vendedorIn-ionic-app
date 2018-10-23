import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AppSettings } from "../constant";

const apiUrl = AppSettings.API_HOST+"genders";
@Injectable({
  providedIn: 'root'
})
export class GenderService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get(apiUrl);
  }

}
