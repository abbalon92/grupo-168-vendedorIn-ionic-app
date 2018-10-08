import { Component, OnInit } from '@angular/core';
import { CheckSellerPage } from '../check-seller/check-seller.page';

@Component({
  selector: 'app-auditory',
  templateUrl: './auditory.page.html',
  styleUrls: ['./auditory.page.scss'],
})
export class AuditoryPage implements OnInit {

  modulos:Array<{name:string,component:any}>;
  title:string = "Auditorias";
   
  constructor() {
  	this.modulos=[
		{name:"comprobar certificado",component:CheckSellerPage}
		];
   }

  ngOnInit() {
  }

}
