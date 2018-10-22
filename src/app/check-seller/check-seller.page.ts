import { Component, OnInit } from '@angular/core';
import { AlertsClass } from "../alerts";
//import para el componente que genera los QR
import { QrgeneratorPage } from "../qrgenerator/qrgenerator.page";
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

  constructor(
    private alert:AlertsClass,
    private barcodeScanner:BarcodeScanner,
    public qrgeneratorPage:QrgeneratorPage
    ) { }

  ngOnInit() {
  }

  creaateCode(){
    this.createdCode=this.qrData;
  }

  scanCode(){
    this.barcodeScanner.scan().then(barcodeData=>{
      this.scannedCode=barcodeData.text;
    }).catch(err=>{
      this.alert.simpleAlert('el error es: '+err);
    });
  }

 

}
