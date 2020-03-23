import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { LoginModule } from './_views/login/login.module';
import { MainModule } from './_views/main/main.module';
import { LoadingSpinnerComponent } from './_shared/loadingSpinner/loadingSpinner.component';
import { AngularMaterialModule } from './_shared/AngularMaterial.module';
import { LoadingSpinnerInterceptor } from './_shared/loadingSpinner/loadingSpinner.interceptor';
import { RouterState } from './_shared/state/router.state';
import {environment} from '../environments/environment';

@NgModule({
   declarations: [AppComponent, LoadingSpinnerComponent],
   imports: [
      BrowserModule,
      AppRouting,
      LoginModule,
      BrowserAnimationsModule,
      MainModule,
      AngularMaterialModule,
      NgxsModule.forRoot([RouterState], { developmentMode: !environment.production }),
      NgxsReduxDevtoolsPluginModule.forRoot(),
      NgxsLoggerPluginModule.forRoot(),
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
