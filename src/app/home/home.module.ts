import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BoxSectionComponent } from './components/box-section/box-section.component';
import { BoxSkillsComponent } from './components/box-skills/box-skills.component';
import { BoxProyectsComponent } from './components/box-proyects/box-proyects.component';
import { BoxEducationsCertificateComponent } from './components/box-education-certificate/box-education-certificate.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, BoxSectionComponent, BoxSkillsComponent, BoxProyectsComponent, BoxEducationsCertificateComponent],
  imports: [CommonModule, SharedModule],
})
export class HomeModule {}
