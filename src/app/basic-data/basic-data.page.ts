import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-basic-data',
  templateUrl: './basic-data.page.html',
  styleUrls: ['./basic-data.page.scss'],
})
export class BasicDataPage implements OnInit {

  tipoIdentificacion = [
    {id:"1", descripcion:"Cédula"},
    {id:"2", descripcion:"Cédula de Extranjeria"},
    {id:"3", descripcion:"Pasaporte"}
  ];

  generos= [
    {id:"1", descripcion:"Femenino"},
    {id:"2", descripcion:"Masculino"}
  ];


    constructor(private router: Router) { }

  ngOnInit() {
  }

  guardar():void{
	 this.router.navigate(['/homeProfile']);
  }

  regresar():void{
	 this.router.navigate(['/homeProfile']);
  }

}
