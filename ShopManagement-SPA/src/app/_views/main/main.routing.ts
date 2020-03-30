import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';

const routes: Routes = [
   {
      path: '',
      component: MainComponent,
      children: [
         { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
         {
            path: 'dashboard',
            loadChildren: () => import('./main_views/dashboard/dashboard.module').then((x) => x.DashboardModule),
         },
      ],
   },
];

@NgModule({
   declarations: [],
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class MainRouting {}
