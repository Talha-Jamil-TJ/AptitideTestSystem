import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
   {
      path: '',
      component: MainComponent,
      children: [
         { path: '', redirectTo: 'productsView', pathMatch: 'full' },
         {
            path: 'productsView',
            loadChildren: () =>
               import('./main_views/productsView/products-view.module').then((x) => x.ProductsViewModule),
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
