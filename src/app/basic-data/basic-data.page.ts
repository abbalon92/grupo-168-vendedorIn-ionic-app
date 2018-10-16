import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../service/users.service';


@Component({
  selector: 'app-basic-data',
  templateUrl: './basic-data.page.html',
  styleUrls: ['./basic-data.page.scss'],
})
export class BasicDataPage implements OnInit {

  title:String="Datos Básicos"
  idUser:any;
  user:object={
    userId:""
  };

  tipoIdentificacion = [
    {id:"1", descripcion:"Cédula"},
    {id:"2", descripcion:"Cédula de Extranjeria"},
    {id:"3", descripcion:"Pasaporte"}
  ];

  generos= [
    {id:"1", descripcion:"Femenino"},
    {id:"2", descripcion:"Masculino"}
  ];


  constructor(private router: Router,private activateRoute: ActivatedRoute,private usersService:UsersService) {
   
   }

  ngOnInit() {
    console.log("ini");
    this.idUser=this.activateRoute.snapshot.paramMap.get('idUser');
    console.log(this.idUser);
    this.cargarDatosUsuario();
  }

  cargarDatosUsuario(){
    this.usersService.getUsuario(this.idUser)
    .subscribe(res => {
      console.log(res);
      this.user=res;
    },err =>{
      console.log(err);
    }); 
  }

  guardar():void{
	 this.router.navigate(['/homeProfile']);
  }


}
