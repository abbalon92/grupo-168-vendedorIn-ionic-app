import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
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
  
  

  getUsuarioLogin(id:any,clave:any): Observable<any> {
//    $http.post(api_url+'post/user/login?username='+data.username+'&password='+data.password).then(function(resp){
  //const params = new HttpParams().set('userId', id).set('password',clave);
    //const url = `${apiUrl}?filter=[userId]=${id}&filter[password]=${clave}`;
    const url = `${apiUrl}/${id}`;
    return this.http.get(url,httpOptions);
  }

  getUsuario(id:any): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get(url, httpOptions);
  }

  crearUsuario(usuario:any){
    return this.http.post(apiUrl, JSON.stringify(usuario), httpOptions);
  }

  private handleError(error: HttpErrorResponse) {
    console.log("ERROR");
    console.log(error);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
  

  actualizarUsuario(usuario:any){
    const url = `${apiUrl}/${usuario.userId}`;
    console.log("urll use");
    console.log(usuario);
    return this.http.put(url, usuario, httpOptions) .pipe(
      
      catchError(this.handleError)
      
    );
  }

  
  
}
