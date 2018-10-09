import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-basic-data',
  templateUrl: './basic-data.page.html',
  styleUrls: ['./basic-data.page.scss'],
})
export class BasicDataPage implements OnInit {

    constructor(private router: Router) { }

  ngOnInit() {
  }

  guardar():void{
	 this.router.navigate(['/homeProfile']);
  }

  regresar():void{
	 this.router.navigate(['/homeProfile']);
  }

}
