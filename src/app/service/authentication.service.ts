import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

//Services
import { UsersService } from './users.service';
import { SellerService } from './seller.service';
import { VStandService } from './v-stand.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public idUsuario: String;
  public idVendedor: String;
  public idPuesto: String;

  public usuario: any;
  public vendedor: any;
  public puesto: any;

  constructor(private http: HttpClient, private sellerService: SellerService, private vStandService: VStandService, private usersService: UsersService) { }

  cargar(idUsu: String) {
    this.idUsuario = idUsu;
    this.cargarUsuario();
    this.cargarVendedor();
    this.cargarPuesto();
  }

  cargarUsuario() {
    this.usersService.getUsuario(this.idUsuario)
      .subscribe(res => {
        this.usuario = res;
     }, err => {

      });
  }

  cargarVendedor() {
    this.sellerService.getVendedor(this.idUsuario)
      .subscribe(res => {
        this.vendedor = res[0];
        this.idVendedor = this.vendedor.sellerId;
      }, err => {

      });
  }


  cargarPuesto() {
    this.vStandService.getStandUser(this.idUsuario)
      .subscribe(res => {
        this.puesto = res[0];
        this.idPuesto = this.puesto.standId;
            }, err => {

      });
  }
}
