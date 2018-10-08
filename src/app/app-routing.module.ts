import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },  { path: 'auditory', loadChildren: './auditory/auditory.module#AuditoryPageModule' },
  { path: 'check-seller', loadChildren: './check-seller/check-seller.module#CheckSellerPageModule' },
  { path: 'auditory-stand-info', loadChildren: './auditory-stand-info/auditory-stand-info.module#AuditoryStandInfoPageModule' },
  { path: 'auditory-questionary', loadChildren: './auditory-questionary/auditory-questionary.module#AuditoryQuestionaryPageModule' },
  { path: 'auditory-evidence', loadChildren: './auditory-evidence/auditory-evidence.module#AuditoryEvidencePageModule' },
  { path: 'novelty-create', loadChildren: './novelty-create/novelty-create.module#NoveltyCreatePageModule' },
  { path: 'novelty-detail', loadChildren: './novelty-detail/novelty-detail.module#NoveltyDetailPageModule' },
  { path: 'novelty-evidence', loadChildren: './novelty-evidence/novelty-evidence.module#NoveltyEvidencePageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
