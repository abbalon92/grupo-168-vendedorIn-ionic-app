import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  title:String="Iniciar Sesión";

  constructor(private router: Router) { }

  ngOnInit() {
  }

 iniciarSesion():void{
	 this.router.navigate(['/home']);
  }

  olvideMiClave():void{
  //this.navCtrl.push();
  }

}
