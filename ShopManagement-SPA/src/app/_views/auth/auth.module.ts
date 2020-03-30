import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

import {LoginComponent} from './login/login.component';
import {AngularMaterialModule} from '../../_shared/AngularMaterial.module';
import {AuthRouting} from './auth.routing';
import {NgxsModule} from '@ngxs/store';
import {AuthState} from '../../_state/auth/Auth.state';
import {RegisterComponent} from './register/register.component';
import {RoleState} from '../../_state/role/Role.state';

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    AuthRouting,
    AngularMaterialModule,
    NgxsModule.forFeature([AuthState, RoleState]),
  ],
   declarations: [LoginComponent, RegisterComponent],
   exports: [],
})
export class AuthModule {}
