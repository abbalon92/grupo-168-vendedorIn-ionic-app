import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:3000/api/users";

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient) { }

  getUsuarioLogin(id:any,clave:String): Observable<any> {
//    $http.post(api_url+'post/user/login?username='+data.username+'&password='+data.password).then(function(resp){

    const url = `${apiUrl}/${id}`;
    console.log("URLL" +url);
    return this.http.get(url, httpOptions);
  }

  getUsuario(id:any): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get(url, httpOptions);
  }

  
  
}
