import {LoginModel} from '../../_models/Login.model';
import {RegisterModel} from '../../_models/Register.model';
import {DecodedTokenModel} from '../../_models/decoded-token.model';

export class Login {
   static readonly type = '[Auth] Login';
   constructor(public payload: LoginModel) {}
}

export class Register {
   static readonly type = '[Auth] Register';
   constructor(public payload: RegisterModel) {}
}

export class Logout {
   static readonly type = '[Auth] Logout';
}

export class LogOutAfterTokenExpiration {
   static readonly type = '[Auth] LogOutAfterTokenExpiration';
   constructor(public decodedToken: DecodedTokenModel) {}
}
