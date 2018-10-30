import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { CourseService } from '../service/course.service';
import { TrainingService } from '../service/training.service';
@Component({
  selector: 'app-finance-management',
  templateUrl: './finance-management.page.html',
  styleUrls: ['./finance-management.page.scss'],
})
export class FinanceManagementPage implements OnInit {	
  titlePage:string = "Gestión de Finanzas";
  courses:any;

  moduleCourseFinanceM=4;
  constructor(private router: Router,public route: ActivatedRoute,public courseService: CourseService, public trainingsService: TrainingService ,public loadingController: LoadingController) { }


  ngOnInit() {
    this.getCourse();
  }
  getCourse() {
    this.courseService.getCourse(this.moduleCourseFinanceM)
    .then(data => {
      this.courses = data;
     // console.log(this.trainings);
    });
  }
}
