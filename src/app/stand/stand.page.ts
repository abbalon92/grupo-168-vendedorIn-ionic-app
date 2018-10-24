import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import {ActivatedRoute} from '@angular/router';
//import QR
import { QrgeneratorPage } from "../qrgenerator/qrgenerator.page";
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NgxQRCodeModule } from "ngx-qrcode2";

//Service
import { SellerService} from '../service/seller.service';
import { StandSellerService} from '../service/stand-seller.service';
import { StandService} from '../service/stand.service';
import { AuthenticationService } from '../service/authentication.service';

//import { Chart } from 'chart.js';


@Component({
  selector: 'app-stand',
  templateUrl: './stand.page.html',
  styleUrls: ['./stand.page.scss'],
})
export class StandPage implements OnInit {

  @ViewChild('doughnutCanvas') doughnutCanvas;
  doughnutChart: any;
  title: string = "Mi Puesto";
  seller:any;
  stand:any;
  stand_seller:any;
  codigoPuesto:string;
  constructor(private router: Router, public sellerService: SellerService, private activateRoute: ActivatedRoute ,
     private standSellerService:StandSellerService,private standService:StandService,public authenticationService:AuthenticationService,
     private barcodeScanner:BarcodeScanner,
     public qrgeneratorPage:QrgeneratorPage) { }

  ngOnInit() {
    this.stand=this.authenticationService.puesto;
    this.codigoPuesto=this.stand.standId.toString();
  }

cargarProgreso(){
 /* this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
 
    type: 'doughnut',
    data: {
        
        datasets: [{
            label: '# of Votes',
            data: [25,25],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
    }

});*/
}
  
verAuditorias(){
  this.router.navigate(['/myAudit']);
}
  

}
