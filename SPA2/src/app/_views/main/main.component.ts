import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-main',
   template: `
      <app-main-nav>
         <div class="container mt-2">
            <router-outlet></router-outlet>
         </div>
      </app-main-nav>
   `,
})
export class MainComponent implements OnInit {
   constructor() {}

   ngOnInit(): void {}
}
