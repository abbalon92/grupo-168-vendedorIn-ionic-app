import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { UsersService } from '../service/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  title:String="Iniciar Sesión";
  usuario:String;
  clave:String;

  forgotPass:String="Olvidé mi contraseña";

   loginOb:any={
    usuario:"",
    clave: ""
  }
  user:any;
  constructor(private router: Router,public route: ActivatedRoute,public usersService: UsersService,public loadingController: LoadingController) { }

  ngOnInit() {
  }

  async consultarUsuario() {
    const loading = await this.loadingController.create({
      //content: 'Loading'
    });
    await loading.present();
    console.log("Usua" +this.loginOb.usuario)
    console.log("Pass" +this.loginOb.clave)
    await this.usersService.getUsuarioLogin(this.loginOb.usuario,this.loginOb.usuario)
      .subscribe(res => {
      
        console.log(res);
        this.user = res;
        loading.dismiss();
      }, err => {
       
        console.log(err);
        loading.dismiss();
      });
     
  }

 iniciarSesion():void{
   //this.consultarUsuario();
   
   this.usersService.getUsuarioLogin(this.loginOb.usuario,this.loginOb.clave)
      .subscribe(res => {
        console.log("Consulto")
        console.log(res);
        this.user = res;
        this.router.navigate(['/home/123']);
      }, err => {
        console.log("No Consulto")
        console.log(err);
      });
	 
  }

  olvideMiClave():void{
  
  }

}
