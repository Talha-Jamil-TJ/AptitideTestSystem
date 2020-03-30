import {Component} from '@angular/core';
import {MenuModel} from '../../../_models/Menu.model';
import {Store} from '@ngxs/store';
import {Logout} from '../../../_state/auth/Auth.actions';

@Component({
   selector: 'app-main-nav',
   templateUrl: './main-nav.component.html',
   styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {
   menus: MenuModel[] = [new MenuModel('Menu 1', ''), new MenuModel('Menu 2', ''), new MenuModel('Menu 3', '')];

   constructor(private store: Store) {}

   logOut() {
      this.store.dispatch(new Logout());
   }
}
