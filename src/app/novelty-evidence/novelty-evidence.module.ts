import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NoveltyEvidencePage } from './novelty-evidence.page';

const routes: Routes = [
  {
    path: '',
    component: NoveltyEvidencePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NoveltyEvidencePage]
})
export class NoveltyEvidencePageModule {}
