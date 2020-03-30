import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {RolesResolver} from '../../_resolvers/Roles.resolver';

const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' },
   { path: 'login', component: LoginComponent },
   {
      path: 'register',
      component: RegisterComponent,
      resolve: {
         roles: RolesResolver,
      },
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   declarations: [],
   exports: [RouterModule],
})
export class AuthRouting {}
