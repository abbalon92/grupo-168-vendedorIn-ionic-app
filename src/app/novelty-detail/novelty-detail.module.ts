import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NoveltyDetailPage } from './novelty-detail.page';

const routes: Routes = [
  {
    path: '',
    component: NoveltyDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NoveltyDetailPage]
})
export class NoveltyDetailPageModule {}
