import {LoginModel} from '../../_models/login.model';

export class Login {
   static readonly type = '[Auth] Login';
   constructor(public payload: LoginModel) {}
}
