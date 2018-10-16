import { Component, OnInit } from '@angular/core';

//imports de prueba
import { LoadingController } from '@ionic/angular';
import { UsersService } from '../service/users.service';
import { DocumentTypeService } from '../service/document-type.service';

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
   
  users:any[]=[];
  documents:any[]=[];

  constructor( 
     public api: UsersService,
     public loadingController: LoadingController,
     public documentService:DocumentTypeService) {
  	this.modulos=[
		{name:"Comprobar certificado",pagina:"/check-seller",imagen:"assets/img/miCertificado.png"}
		];
   }

  ngOnInit() {
    this.getData();
    this.getDocuments();
  }

  public async getData() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    this.api.getData()
      .subscribe(res => {
        this.users=res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  public async getDocuments() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    this.documentService.getData()
      .subscribe(res => {
        this.documents=res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

}
