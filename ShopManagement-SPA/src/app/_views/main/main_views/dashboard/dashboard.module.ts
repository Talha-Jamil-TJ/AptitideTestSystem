import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardComponent} from './dashboard.component';
import {AngularMaterialModule} from '../../../../_shared/AngularMaterial.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{ path: '', pathMatch: 'full', component: DashboardComponent }];

@NgModule({
   declarations: [DashboardComponent],
   imports: [CommonModule, AngularMaterialModule, RouterModule.forChild(routes)],
})
export class DashboardModule {}
