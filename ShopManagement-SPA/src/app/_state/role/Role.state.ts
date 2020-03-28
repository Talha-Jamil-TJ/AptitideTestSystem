import {RoleModel} from '../../_models/Role.model';
import {Action, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {CreateRole, DeleteRole, GetRoles, UpdateRole} from './Role.actions';
import {HttpClient} from '@angular/common/http';
import {NzNotificationService} from 'ng-zorro-antd';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';

export interface RoleStateModel {
   Roles: RoleModel[];
}

@State<RoleStateModel>({
   name: `Role`,
   defaults: {
      Roles: [],
   },
})
@Injectable()
export class RoleState {
   constructor(private http: HttpClient, private _notification: NzNotificationService) {}

   @Action(GetRoles)
   getRole({ patchState }: StateContext<RoleStateModel>) {
      return this.http.get<RoleModel[]>(environment.apiUrl + `Role/`).pipe(
         tap((res) => {
            patchState({
               Roles: res,
            });
         }),
      );
   }

   @Action(CreateRole)
   createRole({ dispatch }: StateContext<RoleStateModel>, { Role }: CreateRole) {
      return this.http.post(environment.apiUrl + `Role/`, Role).pipe(
         tap((res) => {
            dispatch(new GetRoles());
         }),
      );
   }

   @Action(UpdateRole)
   updateRole({ dispatch }: StateContext<RoleStateModel>, { Role }: UpdateRole) {
      return this.http.put(environment.apiUrl + `Role`, Role).pipe(
         tap(() => {
            dispatch(new GetRoles());
         }),
      );
   }

   @Action(DeleteRole)
   deleteRole({ dispatch }: StateContext<RoleStateModel>, { RoleId }: DeleteRole) {
      return this.http.delete(environment.apiUrl + `Role/${RoleId}`);
   }
}
