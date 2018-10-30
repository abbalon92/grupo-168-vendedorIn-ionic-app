import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

//Servicios
import { AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-home-profile',
  templateUrl: './home-profile.page.html',
  styleUrls: ['./home-profile.page.scss'],
})
export class HomeProfilePage implements OnInit {

  title:String="Mi Perfil";
  user:any;
  idUser:any;


  constructor(private router: Router,private activateRoute: ActivatedRoute,private authenticationService:AuthenticationService) {
    
  }

  ngOnInit() {
    this.user=this.authenticationService.cargarUsuario();
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
