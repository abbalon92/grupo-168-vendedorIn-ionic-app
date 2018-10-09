import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuditoryQuestionaryPage } from './auditory-questionary.page';

const routes: Routes = [
  {
    path: '',
    component: AuditoryQuestionaryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AuditoryQuestionaryPage]
})
export class AuditoryQuestionaryPageModule {}
