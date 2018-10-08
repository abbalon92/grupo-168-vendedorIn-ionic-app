import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuditoryEvidencePage } from './auditory-evidence.page';

const routes: Routes = [
  {
    path: '',
    component: AuditoryEvidencePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AuditoryEvidencePage]
})
export class AuditoryEvidencePageModule {}
