import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novelty-create',
  templateUrl: './novelty-create.page.html',
  styleUrls: ['./novelty-create.page.scss'],
})
export class NoveltyCreatePage implements OnInit {
  title:string="Registrar novedad";
  localidades:Array<{id:number,nombre:string}>=[
    {id:1,nombre:"Usaquen"},
    {id:2,nombre:"Chapinero"},
    {id:3,nombre:"Santa Fe"},
    {id:4,nombre:"San Cristobal"},
    {id:5,nombre:"Usme"},
    {id:6,nombre:"Tunjuelito"},
    {id:7,nombre:"Bosa"},
    {id:8,nombre:"Kennedy"},
    {id:9,nombre:"Fontibón"},
    {id:10,nombre:"Engativá"},
    {id:11,nombre:"Suba"},
    {id:12,nombre:"Barrios Unidos"},
    {id:13,nombre:"Teusaquillo"},
    {id:14,nombre:"Los Martires"},
    {id:15,nombre:"Antonio Nariño"},
    {id:16,nombre:"Puente Aranda"},
    {id:17,nombre:"La Candelaria"},
    {id:18,nombre:"Raafael Uribe Uribe"},
    {id:19,nombre:"Ciudad Bolivar"},
    {id:20,nombre:"Sumapaz"}
  ];
  barrios:Array<{id:number,nombre:string}>=[
    {id:1,nombre:"Barrio 1"},
    {id:2,nombre:"Barrio 2"},
    {id:3,nombre:"Barrio 3"},
    {id:4,nombre:"Barrio 4"},
    {id:5,nombre:"Barrio 5"},
    {id:6,nombre:"Barrio 6"},
    {id:7,nombre:"Barrio 7"}
  ];

  ubicaciones:Array<{id:number,nombre:string}>=[
    {id:1,nombre:"Ubicación 1"},
    {id:2,nombre:"Ubicación 2"},
    {id:3,nombre:"Ubicación 3"},
    {id:4,nombre:"Ubicación 4"},
    {id:5,nombre:"Ubicación 5"},
    {id:6,nombre:"Ubicación 6"},
    {id:7,nombre:"Ubicación 7"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
