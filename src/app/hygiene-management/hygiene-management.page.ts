import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { CourseService } from '../service/course.service';
import { TrainingService } from '../service/training.service';


@Component({
  selector: 'app-hygiene-management',
  templateUrl: './hygiene-management.page.html',
  styleUrls: ['./hygiene-management.page.scss'],
})
export class HygieneManagementPage implements OnInit {
  titlePage:string = "Gestión de Higiene";
  courses:any;

  moduleCourseHM=3;

  constructor(private router: Router,public route: ActivatedRoute,public courseService: CourseService, public trainingsService: TrainingService ,public loadingController: LoadingController) { }

  ngOnInit() {
    this.getCourse();
  }
  getCourse() {
    this.courseService.getCourse(this.moduleCourseHM)
    .then(data => {
      this.courses = data;
     // console.log(this.trainings);
    });
  }
}
