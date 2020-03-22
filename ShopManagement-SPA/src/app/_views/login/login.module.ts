import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { AngularMaterialModule } from '../../_shared/AngularMaterial.module';
import { LoginRouting } from './login.routing';

@NgModule({
   imports: [FormsModule, HttpClientModule, CommonModule, LoginRouting, AngularMaterialModule],
   declarations: [LoginComponent],
   exports: [],
})
export class LoginModule {}
