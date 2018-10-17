import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';	

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.page.html',
  styleUrls: ['./contact-information.page.scss'],
})
export class ContactInformationPage implements OnInit {

  title:String="Datos de Contacto";

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  guardar():void{
	 this.router.navigate(['/homeProfile']);
  }

  

}
