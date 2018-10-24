import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';	
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

//Services
import { AuthenticationService } from '../service/authentication.service';
import { UsersService } from '../service/users.service';


@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.page.html',
  styleUrls: ['./contact-information.page.scss'],
})
export class ContactInformationPage implements OnInit {

  title:String="Datos de Contacto";
  usuario:any;
  actualiza:boolean;


  localidades= [
    {id:"1", descripcion:"Chapinero"},
    {id:"2", descripcion:"San Cristobal"},
    {id:"3", descripcion:"Teusaquillo"}
  ]

  barrios =[
    {id:"1", descripcion:"Barrio 1"},
    {id:"2", descripcion:"Barrio 2"},
  ]
  
  estratos =[
    {id:"1", descripcion:"Estato 1"},
    {id:"2", descripcion:"Estato 2"},
    {id:"3", descripcion:"Estato 3"},
    {id:"4", descripcion:"Estato 4"},
    {id:"5", descripcion:"Estato 5"},
    {id:"6", descripcion:"Estato 6"}
  ]

  constructor(private router: Router,private authenticationService: AuthenticationService,public alertCtrl: AlertController,private usersService:UsersService,private loadingController: LoadingController) { }

  ngOnInit() {
    this.usuario=this.authenticationService.usuario;
  }


  async guardar() {
    
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
     this.usersService.actualizarUsuario(this.usuario)
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

    if(this.actualiza){
      const alert = await this.alertCtrl.create({
        message: 'Se ha actualizando correctante.',
        buttons: ['OK']
      });
       await alert.present();
      this.authenticationService.cargarUsuario();
      this.router.navigate(['/homeProfile']);
    }else{
      const alert = await this.alertCtrl.create({
        message: 'Se ha presentado un error. Comuniquese con el administrador.',
        buttons: ['OK']
      });
    }

  }

  
  

}
