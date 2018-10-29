import { Component, OnInit } from '@angular/core';

import { LoadingController } from '@ionic/angular';
import { StandService } from "../service/stand.service";

@Component({
  selector: 'app-auditory-stand-info',
  templateUrl: './auditory-stand-info.page.html',
  styleUrls: ['./auditory-stand-info.page.scss'],
})
export class AuditoryStandInfoPage implements OnInit {
  
  title:string="Informacion del puesto";
  stand:any[]=[];
  
  constructor(private loading_Controller:LoadingController,
    private standService:StandService
    ) { }

  ngOnInit() {
    this.getUser();
  }


  public async getUser() {
    const loading = await this.loading_Controller.create({
      message: 'Loading'
    });
    await loading.present();
    this.standService.getPuesto('1')
      .subscribe(res => {
        this.stand=res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }


}
