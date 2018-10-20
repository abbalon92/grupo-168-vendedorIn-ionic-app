import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HygieneManagementPage } from './hygiene-management.page';

const routes: Routes = [
  {
    path: '',
    component: HygieneManagementPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HygieneManagementPage]
})
export class HygieneManagementPageModule {}
