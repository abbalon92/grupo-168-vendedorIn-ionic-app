import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { CourseService } from '../service/course.service';
import { TrainingService } from '../service/training.service';
@Component({
  selector: 'app-food-management',
  templateUrl: './food-management.page.html',
  styleUrls: ['./food-management.page.scss'],
})
export class FoodManagementPage implements OnInit {
  titlePage:string = "Manipulación de Alimentos";
  courses:any;

  moduleCourseFM=1;

  constructor(private router: Router,public route: ActivatedRoute,public courseService: CourseService, public trainingsService: TrainingService ,public loadingController: LoadingController) { }

  ngOnInit() {
    this.getCourse();
  }
  getCourse() {
    this.courseService.getCourse(this.moduleCourseFM)
    .then(data => {
      this.courses = data;
     // console.log(this.trainings);
    });
  }
}
