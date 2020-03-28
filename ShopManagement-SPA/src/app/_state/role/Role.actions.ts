import {RoleModel} from '../../_models/Role.model';

export class GetRoles {
   static readonly type = '[Role] GetRole';
}

export class GetRole {
   static readonly type = '[Role] GetRole';

   constructor(public RoleId: number) {}
}

export class CreateRole {
   static readonly type = '[Role] CreateRole';

   constructor(public Role: RoleModel) {}
}

export class UpdateRole {
   static readonly type = '[Role] CreateRole';

   constructor(public Role: RoleModel) {}
}

export class DeleteRole {
   static readonly type = '[Role] DeleteRole';

   constructor(public RoleId: number) {}
}
