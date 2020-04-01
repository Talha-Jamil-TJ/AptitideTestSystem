import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardComponent} from './dashboard.component';
import {AngularMaterialModule} from '../../../../_shared/AngularMaterial.module';
import {RouterModule, Routes} from '@angular/router';
import {ChartsModule} from 'ng2-charts';

const routes: Routes = [{ path: '', pathMatch: 'full', component: DashboardComponent }];

@NgModule({
   declarations: [DashboardComponent],
  imports: [CommonModule, AngularMaterialModule, RouterModule.forChild(routes), ChartsModule,],
})
export class DashboardModule {}
