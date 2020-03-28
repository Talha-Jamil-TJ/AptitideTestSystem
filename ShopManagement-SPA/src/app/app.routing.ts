import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
   { path: 'login', loadChildren: () => import('./_views/auth/auth.module').then((m) => m.AuthModule) },
   { path: 'main', loadChildren: () => import('./_views/main/main.module').then((x) => x.MainModule) },
   { path: '', redirectTo: './login', pathMatch: 'full' },
   { path: '**', redirectTo: './login' },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRouting {}
