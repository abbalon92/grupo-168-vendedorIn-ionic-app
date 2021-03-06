import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { AlertController } from '@ionic/angular';


//Services
import { UsersService } from '../service/users.service';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  title:String="Iniciar Sesión";
  forgotPass:String="Olvidé mi contraseña";
  usuario:String;
  clave:String;

  user:any;

  constructor(private router: Router,public route: ActivatedRoute,public usersService: UsersService,public loadingController: LoadingController,
               public authenticationService:AuthenticationService,private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async mensaje(){
    const alert = await this.alertCtrl.create({
      message: 'Usuario o contraseña no validos.',
      buttons: ['OK']
    });
     await alert.present(); 
  }

  async iniciarSesion(){
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
      await this.usersService.getUsuarioLogin(this.usuario,this.clave)
      .subscribe(res => {
        this.user = res;
        if(this.user.length !=0){
          this.authenticationService.cargar(this.usuario);
          this.router.navigate(['/home']);
          loading.dismiss();
        }else{
          this.mensaje();
        }
        loading.dismiss();
      }, err => {
       loading.dismiss();
      });
}

  olvideMiClave():void{
  
  }

}
