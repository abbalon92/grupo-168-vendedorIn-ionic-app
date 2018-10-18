import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hygiene-management',
  templateUrl: './hygiene-management.page.html',
  styleUrls: ['./hygiene-management.page.scss'],
})
export class HygieneManagementPage implements OnInit {
	
	titlePage:string = "Gestión de Higiene";
  constructor() { }

  ngOnInit() {
  }

}
