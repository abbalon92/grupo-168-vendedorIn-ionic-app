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
        console.log("Ser Usu");
        console.log(this.usuario);
      }, err => {

      });
  }

  cargarVendedor() {
    this.sellerService.getVendedor(this.idUsuario)
      .subscribe(res => {
        this.vendedor = res;
        this.idVendedor = this.vendedor[0].sellerId;
        console.log("Vende Servicio");
        console.log(this.vendedor);
      }, err => {

      });
  }


  cargarPuesto() {
    this.vStandService.getStandUser(this.idUsuario)
      .subscribe(res => {
        this.puesto = res;
        this.idPuesto = this.puesto[0].standId;
      }, err => {

      });
  }
}
