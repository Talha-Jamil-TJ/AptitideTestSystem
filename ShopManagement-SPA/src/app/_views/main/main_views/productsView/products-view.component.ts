import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
   selector: 'app-products-view',
   templateUrl: './products-view.component.html',
   styleUrls: ['./products-view.component.css'],
})
export class ProductsViewComponent {
   transaction = {
      name: '',
      amount: null,
   };

   constructor() {}
}
