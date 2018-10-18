import { Component, OnInit } from '@angular/core';

//imports de prueba
import { LoadingController } from '@ionic/angular';
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
     public loadingController: LoadingController,
     public documentService:DocumentTypeService) {
  	this.modulos=[
		{name:"Comprobar certificado",pagina:"/check-seller",imagen:"assets/img/miCertificado.png"}
		];
   }

  ngOnInit() {
    this.getDocuments();
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
