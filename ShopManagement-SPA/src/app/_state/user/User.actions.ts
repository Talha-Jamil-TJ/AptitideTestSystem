import {UserModel} from '../../_models/User.model';

export class GetUsers {
   static readonly type = '[User] GetUsers';
}

export class GetUser {
   static readonly type = '[User] GetUser';

   constructor(public userId: number) {}
}

export class CreateUser {
   static readonly type = '[User] CreateUser';

   constructor(public user: UserModel) {}
}

export class UpdateUser {
   static readonly type = '[User] CreateUser';

   constructor(public user: UserModel) {}
}

export class DeleteUser {
   static readonly type = '[User] DeleteUser';

   constructor(public userId: number) {}
}
