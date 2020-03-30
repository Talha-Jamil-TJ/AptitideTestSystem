import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';

import {LoginModel} from '../../../_models/Login.model';
import {Login} from '../../../_state/auth/Auth.actions';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
   loginModel: LoginModel = { password: '', userName: '' };

   constructor(private store: Store) {}

   ngOnInit(): void {}

   async onSubmit() {
      console.log('loginModel: ', this.loginModel);

      this.store.dispatch(new Login(this.loginModel));
   }
}
