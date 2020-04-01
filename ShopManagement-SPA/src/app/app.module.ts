import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxsModule} from '@ngxs/store';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';

import {AppRouting} from './app.routing';
import {AppComponent} from './app.component';
import {AuthModule} from './_views/auth/auth.module';
import {MainModule} from './_views/main/main.module';
import {LoadingSpinnerComponent} from './_shared/loadingSpinner/loadingSpinner.component';
import {AngularMaterialModule} from './_shared/AngularMaterial.module';
import {LoadingSpinnerInterceptor} from './_shared/loadingSpinner/loadingSpinner.interceptor';
import {RouterState} from './_state/router/Router.state';
import {environment} from '../environments/environment';
import {ErrorInterceptor} from './_interceptors/Error.interceptor';
import {jwtInterceptor} from './_interceptors/JWT.interceptor';
import {DateFnsModule} from 'ngx-date-fns';

@NgModule({
   declarations: [AppComponent, LoadingSpinnerComponent],
   imports: [
      BrowserModule,
      AppRouting,
      AuthModule,
      BrowserAnimationsModule,
      MainModule,
      AngularMaterialModule,
      NgxsModule.forRoot([RouterState], { developmentMode: !environment.production }),
      NgxsReduxDevtoolsPluginModule.forRoot(),
      NgxsLoggerPluginModule.forRoot(),
      DateFnsModule.forRoot(),
   ],
   providers: [
      {
         provide: HTTP_INTERCEPTORS,
         useClass: LoadingSpinnerInterceptor,
         multi: true,
      },
      {
         provide: HTTP_INTERCEPTORS,
         useClass: ErrorInterceptor,
         multi: true,
      },
      jwtInterceptor,
   ],
   bootstrap: [AppComponent],
})
export class AppModule {
}
