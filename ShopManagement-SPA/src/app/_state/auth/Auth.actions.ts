import {LoginModel} from '../../_models/Login.model';
import {RegisterModel} from '../../_models/Register.model';

export class Login {
   static readonly type = '[Auth] Login';
   constructor(public payload: LoginModel) {}
}

export class Register {
   static readonly type = '[Auth] Register';
   constructor(public payload: RegisterModel) {}
}
