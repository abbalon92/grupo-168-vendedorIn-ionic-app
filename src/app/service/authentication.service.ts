import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { SellerService } from './seller.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public idUsuario:String;
  public idVendedor:String;
  public idPuesto:String;

  public vendedor:any;

  constructor(private http: HttpClient,public sellerService :SellerService) { }

  cargarVendedor(){
    this.sellerService.getVendedor(this.idUsuario)
      .subscribe(res => {
        this.vendedor = res;
      }, err => {
      
      });
  }


  cargarPuesto(){
    this.sellerService.getVendedor(this.idUsuario)
      .subscribe(res => {
        this.vendedor = res;
      }, err => {
      
      });
  }
}
