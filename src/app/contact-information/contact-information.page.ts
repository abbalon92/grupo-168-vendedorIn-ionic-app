import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';	

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.page.html',
  styleUrls: ['./contact-information.page.scss'],
})
export class ContactInformationPage implements OnInit {

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
