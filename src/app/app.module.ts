import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { EducationComponent } from './education/education.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './header/header.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    IntroPageComponent,
    EducationComponent,
    FooterComponent,
    ProjectsComponent,
    HeaderComponent,
    ExperienceComponent,
  ],
  providers: [],
  entryComponents: [
        IntroPageComponent
    ],
  bootstrap: [AppComponent],
})
export class AppModule { }
