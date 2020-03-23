import {HttpClient} from '@angular/common/http';
import {Action, State, StateContext, Store} from '@ngxs/store';
import {tap} from 'rxjs/operators';

import {environment} from '../../../../environments/environment';
import {Login} from './login.actions';
import {LoginModel} from '../../../_models/login.model';
import {Navigate} from '../../../_shared/state/router.state';
import {NzNotificationService} from 'ng-zorro-antd';

export interface LoginStateModel {
   loginModel: LoginModel;
   token: string;
}

@State<LoginStateModel>({
   name: 'login',
   defaults: {
      loginModel: {
         userName: '',
         password: '',
      },
      token: '',
   },
})
export class LoginState {
   constructor(private http: HttpClient, private _notification: NzNotificationService, private store: Store) {}

   @Action(Login, { cancelUncompleted: true })
   login({ dispatch, patchState }: StateContext<LoginStateModel>, { payload }: Login) {
      return this.http.post<LoginStateModel>(environment.apiUrl + 'auth/login/', payload).pipe(
         tap((res) => {
            if (res) {
               // dispatch(res.token);
               patchState({ loginModel: payload, token: res.token });
               localStorage.setItem('token', res.token);
               this._notification.create('success', 'Success', 'Logged in successfully');
               this.store.dispatch(new Navigate('main'));
            }
         }),
      );
   }
}
