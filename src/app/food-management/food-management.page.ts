import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-management',
  templateUrl: './food-management.page.html',
  styleUrls: ['./food-management.page.scss'],
})
export class FoodManagementPage implements OnInit {
	titlePage:string = "Manipulación de Alimentos";
  constructor() { }

  ngOnInit() {
  }

}
