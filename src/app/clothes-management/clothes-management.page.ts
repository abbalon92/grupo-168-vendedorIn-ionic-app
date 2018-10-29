import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { CourseService } from '../service/course.service';
import { TrainingService } from '../service/training.service';
@Component({
  selector: 'app-clothes-management',
  templateUrl: './clothes-management.page.html',
  styleUrls: ['./clothes-management.page.scss'],
})
export class ClothesManagementPage implements OnInit {

  titlePage:string = "Gestión de atención al cliente";
  courses:any;

  moduleCourseCM=5;
  constructor(private router: Router,public route: ActivatedRoute,public courseService: CourseService, public trainingsService: TrainingService ,public loadingController: LoadingController) { }

  ngOnInit() {
    this.getCourse();
  }
  getCourse() {
    this.courseService.getCourse(this.moduleCourseCM)
    .then(data => {
      this.courses = data;
     // console.log(this.trainings);
    });
  }
}
