import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';


//Services
import { UsersService } from '../service/users.service';
import { ListService } from '../service/list.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.page.html',
  styleUrls: ['./new-user.page.scss'],
})
export class NewUserPage implements OnInit {

  title:String="Registrarse";
  title_save:String="Crear Cuenta";
  user:any;
  listaTipoIdentifica = [];
  listaGenero = [];

  tipoIdentificacion = [
    { id: "1", descripcion: "Cédula" },
    { id: "2", descripcion: "Cédula de Extranjeria" },
    { id: "3", descripcion: "Pasaporte" }
  ];

  generos = [
    { id: "1", descripcion: "Femenino" },
    { id: "2", descripcion: "Masculino" }
  ];


  constructor(private router: Router,private loadingController: LoadingController,private usersService: UsersService,
              private listService:ListService) { }

  ngOnInit() {
    this.listaTipoIdentifica=this.listService.listaTipoIdentifica
    this.listaGenero=this.listService.listaGeneros;
    }

  
  async crearCuenta(){
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.usersService.crearUsuario(this.user)
      .subscribe(res => {
        this.router.navigate(['/home']);
        loading.dismiss();
      }, err => {
       loading.dismiss();
      });
}


guardar(){
  this.usersService.crearUsuario(this.user);
}
  

}
