import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import {ActivatedRoute} from '@angular/router';

import { SellerService} from '../service/seller.service';
import { StandSellerService} from '../service/stand-seller.service';
import { StandService} from '../service/stand.service';

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

  idUser:any;
  

  constructor(private router: Router, public sellerService: SellerService, private activateRoute: ActivatedRoute ,
     private standSellerService:StandSellerService,private standService:StandService) { }

  ngOnInit() {
    this.idUser=this.activateRoute.snapshot.paramMap.get('idUser');
    this.cargarPuesto();
    this.cargarProgreso();
  }

  cargarPuesto(){
    console.log("Cargar Pu"+this.idUser);
    this.sellerService.getVendedor(this.idUser)
    .subscribe(res => {
      this.seller=res;
      console.log(this.seller);
      console.log("ID SEL"+this.seller.sellerId);
//      this.standSellerService.getStandSeller(this.seller.sellerId)
      this.standSellerService.getStandSeller(1)
      .subscribe(res => {
        this.stand_seller=res;
        console.log("STAN SELLE"+this.stand_seller);
       // this.standService.getPuesto(this.stand_seller.standId)
       this.standService.getPuesto(1)
        .subscribe(res => {
          console.log(res);
          this.stand=res;
          console.log(this.stand);
        },err =>{
          console.log(err);
        }); 

      },err =>{
        console.log(err);
      });
    },err =>{
      console.log(err);
    });

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
