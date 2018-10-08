import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

public appPages = [
    {
      title: 'Mi Perfil',
      url: '/profile'
      //icon: 'pr¿'
    },
    {
      title: 'Salir',
      url: '/home',
      //icon: 'list'
    }
  ];


  verPerfil():void{

  }

  salir():void{}


}
