import { Component, OnInit } from '@angular/core';

import { ListService } from '../service/list.service';

@Component({
  selector: 'app-intro-deta',
  templateUrl: './intro-deta.page.html',
  styleUrls: ['./intro-deta.page.scss'],
})
export class IntroDetaPage implements OnInit {

  tittleReg:String="Registrarse";
  tittleIng:String="Ingresar";

  constructor(private listService:ListService) { }

  ngOnInit() {
    this.listService.cargarListas();
  }

}
