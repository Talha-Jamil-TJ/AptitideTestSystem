import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Store} from '@ngxs/store';

import {LoginModel} from '../../_models/login.model';
import {Login} from './state/login.actions';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
   loginModel: LoginModel = { password: '', userName: '' };

   isError = false;

   constructor(private store: Store) {}

   ngOnInit(): void {}

   onSubmit(loginForm: NgForm) {
      console.log('loginModel: ', this.loginModel);

      if (loginForm.invalid) {
         console.log('loginForm.invalid');
         return;
      }

      this.store.dispatch(new Login(this.loginModel)).subscribe(
         () => {
            console.log('Logged Successfully');
            this.isError = false;
         },
         (error) => (this.isError = true),
      );
   }
}
