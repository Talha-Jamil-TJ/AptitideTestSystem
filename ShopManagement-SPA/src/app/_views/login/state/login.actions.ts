import {LoginModel} from '../../../_models/login.model';

export class Login {
   static readonly type = '[Login] Login';
   constructor(public payload: LoginModel) {}
}
