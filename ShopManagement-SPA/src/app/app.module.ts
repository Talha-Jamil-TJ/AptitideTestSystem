import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LoginModule } from './_views/login/login.module';
import { MainModule } from './_views/main/main.module';
import { LoadingSpinnerComponent } from './_shared/loadingSpinner/loadingSpinner.component';
import { AngularMaterialModule } from './_shared/AngularMaterial.module';
import {LoadingSpinnerInterceptor} from './_shared/loadingSpinner/loadingSpinner.interceptor';

@NgModule({
   declarations: [AppComponent, LoadingSpinnerComponent],
   imports: [
      BrowserModule,
      AppRouting,
      LoginModule,
      BrowserAnimationsModule,
      MainModule,
      AngularMaterialModule,
   ],
   providers: [
      {
         provide: HTTP_INTERCEPTORS,
         useClass: LoadingSpinnerInterceptor,
         multi: true,
      },
   ],
   bootstrap: [AppComponent],
})
export class AppModule {}
