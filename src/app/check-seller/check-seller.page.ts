import { Component, OnInit } from '@angular/core';
import { AlertsClass } from "../alerts";
import { StandService } from "../service/stand.service";
import { LoadingController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';

//import { QrgeneratorPage } from "../qrgenerator/qrgenerator.page";
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-check-seller',
  templateUrl: './check-seller.page.html',
  styleUrls: ['./check-seller.page.scss'],
})
export class CheckSellerPage implements OnInit {

  title:string="Comprobar certificado";
  
  qrData;
  createdCode;
  scannedCode;
  stand:any[]=[];

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private alert:AlertsClass,
    private barcodeScanner:BarcodeScanner,
    private standService:StandService,
    private loading_Controller:LoadingController
    ) { }

  ngOnInit() {
  }

/*
  creaateCode(){
    this.createdCode=this.qrData;
  }
*/
  public async scanCode(){
    
    this.barcodeScanner.scan().then(barcodeData=>{
      this.scannedCode=barcodeData.text;
      this.validaPuesto();
    }).catch(err=>{
      this.alert.simpleAlert('el error es: '+err);
    });
  }


  private async validaPuesto(){
    const loading = await this.loading_Controller.create({
      message: 'Loading'
    });
    await loading.present();
      this.standService.getPuesto('1')
      .subscribe(res => {
        this.stand=res;
          if(res=!null){
            this.router.navigate(['/auditory-questionary']);
          }
          else{
            this.alert.simpleAlert('No se encuentra información asociada a este QR');
          }
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }


}
