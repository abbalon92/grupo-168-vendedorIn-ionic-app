import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


	modulos:Array<{
		name:string,
		pagina:string,
		imagen:string
	}>;

	constructor(private router:Router){
		this.modulos=[
		{name:"Mi puesto",pagina:"/stand",imagen:"assets/img/miPuesto.png"},
		{name:"Cetificado",pagina:"/home",imagen:"assets/img/certificado.jpg"},
		{name:"PQRs",pagina:"/home",imagen:"assets/img/pqr.jpg"},
		{name:"Capacitación",pagina:"/home",imagen:"assets/img/capacitacion.jpg"},
		{name:"Auditoria",pagina:"/auditory",imagen:"assets/img/miPuesto.png"}
		];
	}

  


}
