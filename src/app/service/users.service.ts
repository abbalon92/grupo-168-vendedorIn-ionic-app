import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { AppSettings } from "../constant";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = AppSettings.API_HOST+"users";

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient) { }

  getUsuarioLogin(id:any,clave:String): Observable<any> {
    const url = `${apiUrl}/${id}`;
    console.log("URLL" +url);
    return this.http.get(url, httpOptions);
  }

  getUsuario(id:any): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get(url, httpOptions);
  }

  
  
}
