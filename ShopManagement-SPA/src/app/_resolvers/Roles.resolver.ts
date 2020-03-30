import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngxs/store';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {GetRoles} from '../_state/role/Role.actions';
import {RoleModel} from '../_models/Role.model';
import {tap} from 'rxjs/operators';

@Injectable({
   providedIn: 'root',
})
export class RolesResolver implements Resolve<RoleModel[]> {
   constructor(private store: Store) {}

   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RoleModel[]> {
      return this.store.dispatch(new GetRoles()).pipe(
         tap((res) => console.log(`RolesResolver res: `, res)),
         // map(() => this.store.selectSnapshot(RoleState)),
      );
   }
}
