import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home-profile',
  templateUrl: './home-profile.page.html',
  styleUrls: ['./home-profile.page.scss'],
})
export class HomeProfilePage implements OnInit {

  title:String="Mi Perfil";
  vendedor:object={
    nombre:"Murat Mutlu",
    rol: "Comerciante"
  }
  idUser:any;


  constructor(private router: Router,private activateRoute: ActivatedRoute) {
    
  }

  ngOnInit() {
    
  }


 public menuProfile = [
    
     {
      title: 'Datos Básicos',
      url: "/basicData",	
      //icon: 'pr¿'
    },
    {
      title: 'Datos de Contacto',
      url: "/contactInformation",
      //icon: 'list'
    },
    {
      title: 'Condición de vulnerabilidad',
      url: "/vulnerabilityCondition",
      //icon: 'list'
    }
  ];

  
  

}
