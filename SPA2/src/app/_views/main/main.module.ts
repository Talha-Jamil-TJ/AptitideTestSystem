import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

import { MainNavComponent } from './main-nav/main-nav.component';
import { AngularMaterialModule } from '../../_shared/AngularMaterial.module';
import { MainComponent } from './main.component';
import { MainRouting } from './main.routing';

@NgModule({
   declarations: [MainNavComponent, MainComponent],
   imports: [CommonModule, AngularMaterialModule, MainRouting, FlexLayoutModule],
})
export class MainModule {}
