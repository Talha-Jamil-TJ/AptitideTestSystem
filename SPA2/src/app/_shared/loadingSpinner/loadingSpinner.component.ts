import { Component, OnInit } from '@angular/core';
import { LoadingSpinnerService } from './loadingSpinner.service';
import { Observable } from 'rxjs';

@Component({
   selector: 'app-loading-spinner',
   template: `
      <div class="overlay" *ngIf="isLoading$ | async">
         <mat-progress-spinner class="spinner" [color]="color" [mode]="mode" [value]="value"> </mat-progress-spinner>
      </div>
   `,
   styles: [
      `
         .overlay {
            position: fixed;
            display: block;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: rgba(74, 74, 74, 0.8);
            z-index: 99999;
         }
         .spinner {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
         }
      `,
   ],
})
export class LoadingSpinnerComponent implements OnInit {
   color = 'primary';
   mode = 'indeterminate';
   value = 50;

   isLoading$: Observable<boolean>;

   constructor(private loadingSpinnerService: LoadingSpinnerService) {}

   ngOnInit(): void {
      this.isLoading$ = this.loadingSpinnerService.isLoading$;
   }
}
