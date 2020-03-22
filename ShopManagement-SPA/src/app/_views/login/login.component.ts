import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../_models/login.model';
import { AuthService } from '../../_services/auth.service';
import { NgForm } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
   loginModel: LoginModel = { password: '', userName: '' };

   isError = false;

   constructor(
      private authService: AuthService,
      private _notification: NzNotificationService,
      private _router: Router,
   ) {}

   ngOnInit(): void {}

   onSubmit(loginForm: NgForm) {
      console.log('loginModel: ', this.loginModel);

      if (loginForm.invalid) {
         console.log('loginForm.invalid');
         return;
      }

      this.authService.login(this.loginModel).subscribe(
         () => {
            console.log('Logged Successfully');
            this.isError = false;
            this._notification.create('success', 'Success', 'Logged in successfully');
            this._router.navigate(['main']).then();
         },
         (error) => (this.isError = true),
      );
   }
}
