import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { TrainingService } from '../service/training.service';
//import { AuthenticationService } from '../service/authentication.service';
@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit {
	titlePage:string = "Capacitación";
 
  //training:any;
  
  //trainings:any[]=[];
  trainingsFM:any;
  trainingsIM:any;
  trainingsHM:any;
  trainingsFinanceM:any;
  trainingsCM:any;
  trainingsM:any;

  moduleFoodMangement: any = 1;
  moduleItManagement: any = 2;
  moduleHygieneManagement: any = 3;
  moduleFinanceManagement: any = 4;
  moduleClientManagement: any = 5;
  moduleMarketing: any = 6;

  constructor(private router: Router,public route: ActivatedRoute,public trainingsService: TrainingService ,public loadingController: LoadingController,) { }
  ngOnInit() {
   // this.getTrainings();
    this.getModuleFoodManagement();
    this.getItManagement();
    this.getHygieneManagement();
    this.getFinanceManagement();
    this.getClientManagement();
    this.getMarketing();
  }

  getModuleFoodManagement(){
    this.trainingsService.getTrainings(this.moduleFoodMangement)
    .then(data => {
      this.trainingsFM = data;
     // console.log(this.trainings);
    });
  }
  getItManagement(){
    this.trainingsService.getTrainings(this.moduleItManagement)
    .then(data => {
      this.trainingsIM = data;
     // console.log(this.trainings);
    });
  }

  getHygieneManagement(){
    this.trainingsService.getTrainings(this.moduleHygieneManagement)
    .then(data => {
      this.trainingsHM = data;
     // console.log(this.trainings);
    });
  }
  
  getFinanceManagement(){
    this.trainingsService.getTrainings(this.moduleFinanceManagement)
    .then(data => {
      this.trainingsFinanceM = data;
     // console.log(this.trainings);
    });
  }

  getClientManagement(){
    this.trainingsService.getTrainings(this.moduleClientManagement)
    .then(data => {
      this.trainingsCM = data;
     // console.log(this.trainings);
    });
  }

  getMarketing(){
    this.trainingsService.getTrainings(this.moduleMarketing)
    .then(data => {
      this.trainingsM = data;
     // console.log(this.trainings);
    });
  }


/*
getTrainings() {
  this.trainingsService.getTrainings(this.moduleFoodMangement)
  .then(data => {
    this.trainings = data;
   // console.log(this.trainings);
  });
}
**/

}
