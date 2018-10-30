import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { CourseService } from '../service/course.service';
import { TrainingService } from '../service/training.service';
@Component({
  selector: 'app-it-management',
  templateUrl: './it-management.page.html',
  styleUrls: ['./it-management.page.scss'],
})
export class ItManagementPage implements OnInit {
  titlePage:string = "Gestión de Tecnología";
  courses:any;

  moduleCourseITM=2;
  constructor(private router: Router,public route: ActivatedRoute,public courseService: CourseService, public trainingsService: TrainingService ,public loadingController: LoadingController) { }


  ngOnInit() {
    this.getCourse();
  }
  getCourse() {
    this.courseService.getCourse(this.moduleCourseITM)
    .then(data => {
      this.courses = data;
     // console.log(this.trainings);
    });
  }
}
