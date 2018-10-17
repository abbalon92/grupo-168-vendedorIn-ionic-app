import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  { path: 'home/:idUser',loadChildren: './home/home.module#HomePageModule'},
  { path: 'list', loadChildren: './list/list.module#ListPageModule'},
  { path: 'auditory', loadChildren: './auditory/auditory.module#AuditoryPageModule' },
  { path: 'check-seller', loadChildren: './check-seller/check-seller.module#CheckSellerPageModule' },
  { path: 'auditory-stand-info', loadChildren: './auditory-stand-info/auditory-stand-info.module#AuditoryStandInfoPageModule' },
  { path: 'auditory-questionary', loadChildren: './auditory-questionary/auditory-questionary.module#AuditoryQuestionaryPageModule' },
  { path: 'auditory-evidence', loadChildren: './auditory-evidence/auditory-evidence.module#AuditoryEvidencePageModule' },
  { path: 'novelty-create', loadChildren: './novelty-create/novelty-create.module#NoveltyCreatePageModule' },
  { path: 'novelty-detail', loadChildren: './novelty-detail/novelty-detail.module#NoveltyDetailPageModule' },
  { path: 'novelty-evidence', loadChildren: './novelty-evidence/novelty-evidence.module#NoveltyEvidencePageModule'},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule' },
  { path: 'homeProfile/:idUser', loadChildren: './home-profile/home-profile.module#HomeProfilePageModule' },
  { path: 'basicData/:idUser', loadChildren: './basic-data/basic-data.module#BasicDataPageModule' },
  { path: 'contactInformation/:idUser', loadChildren: './contact-information/contact-information.module#ContactInformationPageModule' },
  { path: 'vulnerabilityCondition/:idUser', loadChildren: './vulnerability-condition/vulnerability-condition.module#VulnerabilityConditionPageModule' },
  { path: 'stand/:idUser', loadChildren: './stand/stand.module#StandPageModule' },
  { path: 'myAudit/:idPuesto', loadChildren: './my-audit/my-audit.module#MyAuditPageModule' },
  { path: 'training', loadChildren: './training/training.module#TrainingPageModule' },
  { path: 'foodManagement', loadChildren: './food-management/food-management.module#FoodManagementPageModule' },
  { path: 'itManagement', loadChildren: './it-management/it-management.module#ItManagementPageModule' },
  { path: 'hygieneManagement', loadChildren: './hygiene-management/hygiene-management.module#HygieneManagementPageModule' },
  { path: 'financeManagement', loadChildren: './finance-management/finance-management.module#FinanceManagementPageModule' },
  { path: 'clothesManagement', loadChildren: './clothes-management/clothes-management.module#ClothesManagementPageModule' },
  { path: 'digitalMarket', loadChildren: './digital-market/digital-market.module#DigitalMarketPageModule' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
