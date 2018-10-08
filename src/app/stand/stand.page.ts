import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stand',
  templateUrl: './stand.page.html',
  styleUrls: ['./stand.page.scss'],
})
export class StandPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  regresar():void{
	 this.router.navigate(['/home']);
  }


}
