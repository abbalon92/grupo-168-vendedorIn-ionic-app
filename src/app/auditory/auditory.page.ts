import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auditory',
  templateUrl: './auditory.page.html',
  styleUrls: ['./auditory.page.scss'],
})
export class AuditoryPage implements OnInit {

  modulos:Array<{
		name:string,
		pagina:string,
		imagen:string
	}>;
  title:string = "Auditorias";
   
  constructor() {
  	this.modulos=[
		{name:"Comprobar certificado",pagina:"/check-seller",imagen:"assets/img/miCertificado.png"}
		];
   }

  ngOnInit() {
  }

}
