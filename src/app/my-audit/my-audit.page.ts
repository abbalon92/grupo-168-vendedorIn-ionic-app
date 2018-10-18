import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MyAuditService } from '../service/my-audit.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-my-audit',
  templateUrl: './my-audit.page.html',
  styleUrls: ['./my-audit.page.scss'],
})
export class MyAuditPage implements OnInit {

  title:String="Mis Auditorias";
  auditorias: any[];
  idPuesto:any;
  label:String="Auditoria No. ";

  constructor(private myAuditService:MyAuditService,private activateRoute:ActivatedRoute,public alertCtrl: AlertController) { }

  ngOnInit() {
    this.idPuesto=this.activateRoute.snapshot.paramMap.get('idPuesto')
    console.log("Audi" +this.idPuesto);
    this.cargarMisAuditorias();
  }

  cargarMisAuditorias(){
    this.myAuditService.getAuditorias(this.idPuesto)
    .subscribe(res => {
      this.auditorias=res;
    }, err => {
      console.log("No Consulto")
      console.log(err);
    });
  }

  async seleccionarAuditoria(auditoria: any){

    console.log(auditoria);
    const alert =await  this.alertCtrl.create({
      header:  this.label + auditoria.auditId,
      message: 'Su evaluación promedio fue de :' + auditoria.auditScore ,
      buttons: ['OK']
    });
    await alert.present();
  }

}
