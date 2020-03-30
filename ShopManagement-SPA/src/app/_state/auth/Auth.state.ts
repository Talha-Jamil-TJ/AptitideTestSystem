import {HttpClient} from '@angular/common/http';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {tap} from 'rxjs/operators';

import {environment} from '../../../environments/environment';
import {Login, Logout, LogOutAfterTokenExpiration, Register} from './Auth.actions';
import {Navigate} from '../router/Router.state';
import {NzNotificationService} from 'ng-zorro-antd';
import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {DecodedTokenModel} from '../../_models/decoded-token.model';

export interface AuthStateModel {
   decodedToken: DecodedTokenModel;
}

@State<AuthStateModel>({
   name: 'login',
   defaults: {
      decodedToken: null,
   },
})
@Injectable()
export class AuthState {
   private tokenExpirationTimer: any;

   constructor(private http: HttpClient, private _notification: NzNotificationService) {}

   @Selector()
   static isAuthenticated(): boolean {
      const token = localStorage.getItem(`token`);

      if (!token) {
         return false;
      }

      const jwtHelper = new JwtHelperService();

      return !jwtHelper.isTokenExpired(token);
   }

   @Selector()
   static getToken(): string | undefined {
      return localStorage.getItem(`token`);
   }

   @Selector()
   static getDecodedToken(): DecodedTokenModel | undefined {
      return JSON.parse(localStorage.getItem(`decodedToken`));
   }

   @Action(Login, { cancelUncompleted: true })
   login({ dispatch, patchState }: StateContext<AuthStateModel>, { payload }: Login) {
      return this.http.post<{ token: string }>(environment.apiUrl + 'auth/login/', payload).pipe(
         tap((res) => {
            if (res) {
               const helper = new JwtHelperService();
               const thisDecodedToken = helper.decodeToken(res.token);

               patchState({ decodedToken: thisDecodedToken });

               localStorage.setItem(`decodedToken`, JSON.stringify(thisDecodedToken));
               localStorage.setItem('token', res.token);

               this._notification.create('success', 'Success', 'Logged in successfully');

               dispatch(new Navigate('main'));
               dispatch(new LogOutAfterTokenExpiration(thisDecodedToken));
            }
         }),
      );
   }

   @Action(Register)
   register({ dispatch, patchState }: StateContext<AuthStateModel>, { payload }: Register) {
      return this.http.post<{ token: string }>(environment.apiUrl + `auth/register/`, payload).pipe(
         tap((res) => {
            const helper = new JwtHelperService();
            const thisDecodedToken = helper.decodeToken(res.token);

            patchState({ decodedToken: thisDecodedToken });

            localStorage.setItem(`decodedToken`, JSON.stringify(thisDecodedToken));
            localStorage.setItem('token', res.token);

            this._notification.create('success', 'Success', 'Registration successfully');

            dispatch(new Navigate('main'));
            dispatch(new LogOutAfterTokenExpiration(thisDecodedToken));
         }),
      );
   }

   @Action(Logout)
   logout({ dispatch }: StateContext<AuthStateModel>) {
      localStorage.removeItem(`token`);
      localStorage.removeItem(`decodedToken`);

      this.clearTimeOut();

      dispatch(new Navigate('/auth/login'));
   }

   @Action(LogOutAfterTokenExpiration)
   logOutAfterTokenExpiration(
      { dispatch }: StateContext<AuthStateModel>,
      { decodedToken }: LogOutAfterTokenExpiration,
   ) {
      const difference = decodedToken.exp - decodedToken.iat;

      console.log(`logOutAfterTokenExpiration difference: `, difference);

      this.tokenExpirationTimer = setTimeout(() => dispatch(new Logout()), difference);
   }

   clearTimeOut() {
      if (this.tokenExpirationTimer) {
         clearTimeout(this.tokenExpirationTimer);
         this.tokenExpirationTimer = null;
      }
   }
}
