import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import { QuickAddExpInfoCardComponent } from './quick-add-exp-info-card/quick-add-exp-info-card.component';
import { QuickEducationInfoComponent } from './quick-education-info/quick-education-info.component';
import { RouterModule, Routes} from '@angular/router';
import { MainBioExpPageComponent } from './main-bio-exp-page/main-bio-exp-page.component';
import { MainTutorExpPageComponent } from './main-tutor-exp-page/main-tutor-exp-page.component';
import { MainAddExpPageComponent } from './main-add-exp-page/main-add-exp-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { AnimationComponentServiceService } from './animation-component-service.service';


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
    QuickTutorExpInfoCardComponent,
    QuickAddExpInfoCardComponent,
    QuickEducationInfoComponent,
    MainBioExpPageComponent,
    MainTutorExpPageComponent,
    MainAddExpPageComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [AnimationComponentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
