import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
//Services
import { UsersService } from '../service/users.service';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-basic-data',
  templateUrl: './basic-data.page.html',
  styleUrls: ['./basic-data.page.scss'],
})
export class BasicDataPage implements OnInit {

  title: String = "Datos Básicos"
  user: any;
  actualiza:Boolean;

  tipoIdentificacion = [
    { id: "1", descripcion: "Cédula" },
    { id: "2", descripcion: "Cédula de Extranjeria" },
    { id: "3", descripcion: "Pasaporte" }
  ];

  generos = [
    { id: "1", descripcion: "Femenino" },
    { id: "2", descripcion: "Masculino" }
  ];


  constructor(private router: Router, private activateRoute: ActivatedRoute, private usersService: UsersService, private authenticationService: AuthenticationService, public alertCtrl: AlertController,private loadingController: LoadingController) {

  }

  ngOnInit() {
    this.cargarDatosUsuario();
  }

  cargarDatosUsuario() {
    this.user = this.authenticationService.usuario;
  }

  async guardar() {
    
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
     this.usersService.actualizarUsuario(this.user)
    .subscribe(() => {
      this.actualiza=true;
      this.authenticationService.cargarUsuario();
      this.router.navigate(['/homeProfile']);
      loading.dismiss();
    }, err => {
      this.actualiza=false;
      console.log(err);
     loading.dismiss();
    });


console.log("Ini If");
    if(this.actualiza){
      console.log("Actuali Tru");
      const alert = await this.alertCtrl.create({
        message: 'Se ha actualizando correctante.',
        buttons: ['OK']
      });
       await alert.present();
      this.authenticationService.cargarUsuario();
      this.router.navigate(['/homeProfile']);
    }else{
      console.log("Actuali False");
      const alert = await this.alertCtrl.create({
        message: 'Se ha presentado un error. Comuniquese con el administrador.',
        buttons: ['OK']
      });
    }

  }


}
