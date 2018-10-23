import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { AppSettings } from '../constant'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl =AppSettings.API_HOST+"sellers";


@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient) { }

  getVendedor(id:any): Observable<any> {
    const url =`${apiUrl}?filter[where][userId]=${id}`;
    return this.http.get(url, httpOptions);
  }

  crearVendedor(vendedor:any){
    return this.http.post(apiUrl, JSON.stringify(vendedor), httpOptions);
  }

  actualizaVendedor(vendedor:any){
    const url = `${apiUrl}/${vendedor.sellerId}`;
    console.log ("URL");
    console.log (vendedor);
   return this.http.put(url, vendedor, httpOptions) .pipe(
     catchError(this.handleError)
    );
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
  
}
