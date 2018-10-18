import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothes-management',
  templateUrl: './clothes-management.page.html',
  styleUrls: ['./clothes-management.page.scss'],
})
export class ClothesManagementPage implements OnInit {

	titlePage:string = "Gestión de textiles o ropa";
  constructor() {  }
  ngOnInit() {
  }

}
