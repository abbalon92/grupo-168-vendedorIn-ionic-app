import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { Input } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	idUsuario:String;

	modulos:Array<{
		name:string,
		pagina:string,
		imagen:string
	}>;

	constructor(private router:Router,private activateRoute: ActivatedRoute){
		this.modulos=[
		{name:"Mi puesto",pagina:"/stand",imagen:"assets/img/miPuesto.png"},
		{name:"Novedades",pagina:"/novelty-create",imagen:"assets/img/pqr.jpg"},
		{name:"Capacitación",pagina:"/training",imagen:"assets/img/capacitacion.jpg"},
		{name:"Auditoria",pagina:"/auditory",imagen:"assets/img/auditoria.jpg"}
		];
	}

	ngOnInit() {
	
		//this.idUser=this.activateRoute.snapshot.paramMap.get('idUser');
	}

	cargarHome(usuarioParam:String){
		this.idUsuario=usuarioParam;
	
	}



	
  


}
