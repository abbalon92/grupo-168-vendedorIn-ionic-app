import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CheckSellerPage } from './check-seller.page';
import { IonicModule } from '@ionic/angular';
//Import para el funcionamiento del componente que imprime el qr
//import { NgxQRCodeModule } from "ngx-qrcode2";
//import { QrgeneratorPage } from "../qrgenerator/qrgenerator.page";

const routes: Routes = [
  {
    path: '',
    component: CheckSellerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
    //NgxQRCodeModule
  ],
  declarations: [
    CheckSellerPage,
    //QrgeneratorPage
  ]
})
export class CheckSellerPageModule {}
