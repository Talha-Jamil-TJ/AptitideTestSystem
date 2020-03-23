import { HttpClient } from '@angular/common/http';
import { Action, State, StateContext, Store } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Login } from './auth.actions';
import { LoginModel } from '../../_models/login.model';
import { Navigate } from '../../_shared/state/router.state';
import { NzNotificationService } from 'ng-zorro-antd';
import { Injectable } from '@angular/core';

export interface AuthStateModel {
   loginModel: LoginModel;
   token: string;
}

@State<AuthStateModel>({
   name: 'login',
   defaults: {
      loginModel: {
         userName: '',
         password: '',
      },
      token: '',
   },
})
@Injectable()
export class AuthState {
   constructor(
      private http: HttpClient,
      private _notification: NzNotificationService,
   ) {}

   @Action(Login, { cancelUncompleted: true })
   login({ dispatch, patchState }: StateContext<AuthStateModel>, { payload }: Login) {
      return this.http.post<AuthStateModel>(environment.apiUrl + 'auth/login/', payload).pipe(
         tap((res) => {
            if (res) {
               patchState({ loginModel: payload, token: res.token });
               localStorage.setItem('token', res.token);
               this._notification.create('success', 'Success', 'Logged in successfully');
               dispatch(new Navigate('main'));
               // this.store.dispatch();
            }
         }),
      );
   }
}
