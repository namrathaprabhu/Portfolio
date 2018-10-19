import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { IntroPageComponent } from '../intro-page/intro-page.component';
import { EducationComponent } from '../education/education.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ExperienceComponent } from '../experience/experience.component';

const appRoutes: Routes = [
  {path: 'home', component:IntroPageComponent},
  {path: 'education', component:EducationComponent},
  {path: 'projects', component:ProjectsComponent},
  {path: 'experience', component:ExperienceComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
