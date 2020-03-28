import {HttpClient} from '@angular/common/http';
import {Action, State, StateContext} from '@ngxs/store';
import {tap} from 'rxjs/operators';

import {environment} from '../../../environments/environment';
import {Login, Register} from './Auth.actions';
import {LoginModel} from '../../_models/Login.model';
import {Navigate} from '../router/Router.state';
import {NzNotificationService} from 'ng-zorro-antd';
import {Injectable} from '@angular/core';
import {UserModel} from '../../_models/User.model';

export interface AuthStateModel {
   loginModel: LoginModel;
   currentUser: UserModel;
   token: string;
}

@State<AuthStateModel>({
   name: 'login',
   defaults: {
      loginModel: {
         userName: '',
         password: '',
      },
      currentUser: {
         id: 0,
         userName: '',
         roleId: 0,
      },
      token: '',
   },
})
@Injectable()
export class AuthState {
   constructor(private http: HttpClient, private _notification: NzNotificationService) {}

   @Action(Login, { cancelUncompleted: true })
   login({ dispatch, patchState }: StateContext<AuthStateModel>, { payload }: Login) {
      return this.http.post<{ token: string }>(environment.apiUrl + 'auth/login/', payload).pipe(
         tap((res) => {
            if (res) {
               patchState({ loginModel: payload, token: res.token });
               localStorage.setItem('token', res.token);
               this._notification.create('success', 'Success', 'Logged in successfully');
               dispatch(new Navigate('main'));
            }
         }),
      );
   }

   @Action(Register)
   register({ dispatch, patchState }: StateContext<AuthStateModel>, { payload }: Register) {
      return this.http.post<UserModel>(environment.apiUrl + `auth/register/`, payload).pipe(
         tap((res) => {
            patchState({
               currentUser: res,
            });

            this._notification.create('success', 'Success', 'Registered in successfully');

            dispatch(new Navigate(''));
         }),
      );
   }
}
