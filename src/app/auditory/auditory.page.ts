import { Component, OnInit } from '@angular/core';

//imports de prueba
import { LoadingController } from '@ionic/angular';
import { UsersService } from '../users.service';

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
   
  data1: any;
  data2: any;
  data3: any;
  data4: any;


  constructor( public api: UsersService, public loadingController: LoadingController) {
  	this.modulos=[
		{name:"Comprobar certificado",pagina:"/check-seller",imagen:"assets/img/miCertificado.png"}
		];
   }

  ngOnInit() {
    this.getData();
  }

  public async getData() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    this.api.getData()
      .subscribe(res => {
        this.data1 = res[0];
        this.data2 = res[1];
        this.data3 = res[2];
        this.data4 = res[3];
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

}
