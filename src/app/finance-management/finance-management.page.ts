import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance-management',
  templateUrl: './finance-management.page.html',
  styleUrls: ['./finance-management.page.scss'],
})
export class FinanceManagementPage implements OnInit {
	
	titlePage:string = "Gestión de Finanzas";
  constructor() { }

  ngOnInit() {
  }

}
