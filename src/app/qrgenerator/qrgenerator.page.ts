import { Component, OnInit, Input } from '@angular/core';
import { NgxQRCodeModule } from "ngx-qrcode2";

@Component({
  selector: 'app-qrgenerator',
  templateUrl: './qrgenerator.page.html',
  styleUrls: ['./qrgenerator.page.scss'],
})
export class QrgeneratorPage implements OnInit {

  @Input() codigoqr:string;

  constructor() { }

  ngOnInit() {
  }

  /*
  creaateCode(){
    this.createdCode=this.qrData;
  }
  */
}
