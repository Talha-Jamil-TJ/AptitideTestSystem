import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

import {MainNavComponent} from './main-nav/main-nav.component';
import {AngularMaterialModule} from '../../_shared/AngularMaterial.module';
import {MainComponent} from './main.component';
import {MainRouting} from './main.routing';
import {AddApplicantComponent} from './main_views/add-applicant/add-applicant.component';
import {AddVacancyComponent} from './main_views/add-vacancy/add-vacancy.component';
import {AddInterviewComponent} from './main_views/add-interview/add-interview.component';

@NgModule({
   declarations: [MainNavComponent, MainComponent, AddApplicantComponent, AddVacancyComponent, AddInterviewComponent],
   imports: [CommonModule, AngularMaterialModule, MainRouting, FlexLayoutModule],
})
export class MainModule {}
