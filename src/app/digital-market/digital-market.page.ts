import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { CourseService } from '../service/course.service';
import { TrainingService } from '../service/training.service';
@Component({
  selector: 'app-digital-market',
  templateUrl: './digital-market.page.html',
  styleUrls: ['./digital-market.page.scss'],
})
export class DigitalMarketPage implements OnInit {	
  titlePage:string = "Marketing";
  courses:any;

  moduleCourseDM=6;
  constructor(private router: Router,public route: ActivatedRoute,public courseService: CourseService, public trainingsService: TrainingService ,public loadingController: LoadingController) { }


  ngOnInit() {
    this.getCourse();
  }
  getCourse() {
    this.courseService.getCourse(this.moduleCourseDM)
    .then(data => {
      this.courses = data;
     // console.log(this.trainings);
    });
  }

}
