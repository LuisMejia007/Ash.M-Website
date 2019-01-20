import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainBioExpPageComponent } from './main-bio-exp-page/main-bio-exp-page.component';
import { MainTutorExpPageComponent } from './main-tutor-exp-page/main-tutor-exp-page.component';
import { MainAddExpPageComponent } from './main-add-exp-page/main-add-exp-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'biologyExperience', component: MainBioExpPageComponent },
  { path: 'tutorExperience', component: MainTutorExpPageComponent },
  { path: 'additionalExperience', component: MainAddExpPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  declarations: []
})
export class AppRoutingModule { }
