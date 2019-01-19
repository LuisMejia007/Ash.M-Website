import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EducationExpComponent } from './education-exp/education-exp.component';
import { TutoringExpComponentComponent } from './tutoring-exp-component/tutoring-exp-component.component';
import { AdditionalExpComponentComponent } from './additional-exp-component/additional-exp-component.component';
import { AboutMeComponentComponent } from './about-me-component/about-me-component.component';
import { EducationComponentComponent } from './education-component/education-component.component';
import { ExperienceInfoCardComponent } from './experience-info-card/experience-info-card.component';
import { StickNavDirective } from './directives/stick-nav.directive';
import { QuickBioExpInfoCardComponent } from './quick-bio-exp-info-card/quick-bio-exp-info-card.component';
import { QuickTutorExpInfoCardComponent } from './quick-tutor-exp-info-card/quick-tutor-exp-info-card.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationExpComponent,
    TutoringExpComponentComponent,
    AdditionalExpComponentComponent,
    AboutMeComponentComponent,
    EducationComponentComponent,
    ExperienceInfoCardComponent,
    StickNavDirective,
    QuickBioExpInfoCardComponent,
    QuickTutorExpInfoCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
