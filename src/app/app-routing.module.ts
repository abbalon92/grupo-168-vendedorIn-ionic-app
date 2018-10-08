import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule' },
  { path: 'homeProfile', loadChildren: './home-profile/home-profile.module#HomeProfilePageModule' },
  { path: 'basicData', loadChildren: './basic-data/basic-data.module#BasicDataPageModule' },
  { path: 'contactInformation', loadChildren: './contact-information/contact-information.module#ContactInformationPageModule' },
  { path: 'vulnerabilityCondition', loadChildren: './vulnerability-condition/vulnerability-condition.module#VulnerabilityConditionPageModule' },  { path: 'stand', loadChildren: './stand/stand.module#StandPageModule' }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
