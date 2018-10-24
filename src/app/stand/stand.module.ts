import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StandPage } from './stand.page';
//Import qr
import { NgxQRCodeModule } from "ngx-qrcode2";
import { QrgeneratorPage } from "../qrgenerator/qrgenerator.page";


const routes: Routes = [
  {
    path: '',
    component: StandPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgxQRCodeModule
  ],
  declarations: [StandPage,QrgeneratorPage]
})
export class StandPageModule {}
