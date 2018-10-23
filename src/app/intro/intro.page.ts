import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  tittleIng:String="Ingresar App";

  public listSlide = [
    {
     title: 'Inscribete!',
     img: "assets/img/introPrin.jpg",	
     desc: 'Se han registrado más 1000 en la aplicación de Vendedores IN'
   },
   {
    title: 'Convocatoria!',
    img: "assets/img/intro1.jpg",	
    desc: 'Distrito convoca a los vendedores ...'
   },
   {
    title: 'Actualidad',
    img: "assets/img/intro3.jpg",	
    desc: 'Se han creado más de 20 ubicaciones'
   }
 ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ingresarApp(): void {
     this.router.navigate(['/introDeta']);
  }

}
