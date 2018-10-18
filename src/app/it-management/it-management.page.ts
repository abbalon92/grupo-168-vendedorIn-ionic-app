import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-it-management',
  templateUrl: './it-management.page.html',
  styleUrls: ['./it-management.page.scss'],
})
export class ItManagementPage implements OnInit {
	titlePage:string = "Gestión de Tecnología";
  constructor() { }

  ngOnInit() {
  }

}
