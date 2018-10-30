import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { AppSettings } from "../constant";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = AppSettings.API_HOST+"courses";


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  
  constructor(private http: HttpClient) { }
  
  
/*
  getCourse(id:any): Observable<any> {
    const URL = `${apiUrl}/${id}`;
    return this.http.get(URL, httpOptions);
  }
  */

  getCourse(id:any) {
    return new Promise(resolve => {
      const url = `${apiUrl}/${id}`;
      this.http.get(url).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  createCourse(curso:any){
    return this.http.post(apiUrl, JSON.stringify(curso), httpOptions);
  }

  private handleError(error: HttpErrorResponse) {
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
  

  actualizarCurso(curso:any){
    const url = `${apiUrl}/${curso.userId}`;
    console.log("urll use");
    console.log(curso);
    return this.http.put(url, curso, httpOptions) .pipe(
      
      catchError(this.handleError)
      
    );
  }



}
