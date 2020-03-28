import {UserModel} from '../../_models/User.model';
import {Action, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {CreateUser, DeleteUser, GetUser, GetUsers, UpdateUser} from './User.actions';
import {HttpClient} from '@angular/common/http';
import {NzNotificationService} from 'ng-zorro-antd';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';

export interface UserStateModel {
   users: UserModel[];
}

@State<UserStateModel>({
   name: `user`,
   defaults: {
      users: [],
   },
})
@Injectable()
export class UserState {
   constructor(private http: HttpClient, private _notification: NzNotificationService) {}

   @Action(GetUser)
   getUser({ patchState }: StateContext<UserStateModel>) {
      return this.http.get<UserModel[]>(environment.apiUrl + `User/`).pipe(
         tap((res) => {
            patchState({
               users: res,
            });
         }),
      );
   }

   @Action(CreateUser)
   createUser({ dispatch }: StateContext<UserStateModel>, { user }: CreateUser) {
      return this.http.post(environment.apiUrl + `User/`, user).pipe(
         tap((res) => {
            dispatch(new GetUsers());
         }),
      );
   }

   @Action(UpdateUser)
   updateUser({ dispatch }: StateContext<UserStateModel>, { user }: UpdateUser) {
      return this.http.put(environment.apiUrl + `User`, user).pipe(
         tap(() => {
            dispatch(new GetUsers());
         }),
      );
   }

   @Action(DeleteUser)
   deleteUser({ dispatch }: StateContext<UserStateModel>, { userId }: DeleteUser) {
      return this.http.delete(environment.apiUrl + `User/${userId}`);
   }
}
