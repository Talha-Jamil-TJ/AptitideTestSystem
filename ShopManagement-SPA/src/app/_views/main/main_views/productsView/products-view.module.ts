import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { ProductsViewComponent } from './products-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from '../../../../_shared/AngularMaterial.module';

const routes: Routes = [{ path: '', component: ProductsViewComponent }];

@NgModule({
   declarations: [ProductsViewComponent],
   imports: [CommonModule, RouterModule.forChild(routes), AngularMaterialModule, FlexLayoutModule, FormsModule],
})
export class ProductsViewModule {}
