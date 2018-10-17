import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:3000/api/sellers";

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient) { }

  getVendedor(id:any): Observable<any> {
    const url =`${apiUrl}?filter[where][userId]=${id}`;
    console.log("URLL" +url);
    return this.http.get(url, httpOptions);
  }
}
