import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {RegisterModel} from '../../../_models/Register.model';
import {Register} from '../../../_state/auth/Auth.actions';

@Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
   @Select((state) => state.Role.Roles) Role$: Observable<any>;

   registerForm: RegisterModel = {
      password: '',
      userName: '',
      roleId: null,
   };

   constructor(private store: Store) {}

   ngOnInit(): void {
      console.log(`RegisterComponent init`);
   }

   onSubmit() {
      this.store.dispatch(new Register(this.registerForm));
   }

   checkForm = (form) => {
      console.log(`Form: `, form);
   }
}
