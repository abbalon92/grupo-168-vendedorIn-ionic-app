import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

//Page
import {HomePage} from '../home/home.page';

//Service
import { UsersService } from '../service/users.service';


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
              public homePage:HomePage) { }

  ngOnInit() {
  }

  async iniciarSesion(){
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
     await this.usersService.getUsuarioLogin(this.usuario,this.clave)
      .subscribe(res => {
        this.user = res;
        this.homePage.cargarHome(this.usuario);
        //this.router.navigate(['/home']);
        loading.dismiss();
      }, err => {
       loading.dismiss();
      });
}

  olvideMiClave():void{
  
  }

}
