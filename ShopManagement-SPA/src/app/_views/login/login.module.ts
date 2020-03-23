import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

import {LoginComponent} from './login.component';
import {AngularMaterialModule} from '../../_shared/AngularMaterial.module';
import {LoginRouting} from './login.routing';
import {NgxsModule} from '@ngxs/store';
import {LoginState} from './state/login.state';

@NgModule({
   imports: [
      FormsModule,
      HttpClientModule,
      CommonModule,
      LoginRouting,
      AngularMaterialModule,
      NgxsModule.forFeature([LoginState]),
   ],
   declarations: [LoginComponent],
   exports: [],
})
export class LoginModule {}
