import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	modulos:Array<{name:string,pagina:string}>;

	constructor(private router:Router){
		this.modulos=[
		{name:"mi puesto",pagina:"/home"},
		{name:"Cetificado",pagina:"/home"},
		{name:"pqr",pagina:"/home"},
		{name:"capacitacion",pagina:"/home"},
		{name:"auditorias",pagina:"/auditory"}
		];
	}


}
