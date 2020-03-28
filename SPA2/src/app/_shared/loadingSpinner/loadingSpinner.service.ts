import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
   providedIn: 'root',
})
export class LoadingSpinnerService {
  /* Subject */
   private _isLoading = new BehaviorSubject<boolean>(false);
   /* Observables */
  isLoading$: Observable<boolean> = this._isLoading.asObservable();

   show() {
      this._isLoading.next(true);
   }
   hide() {
      this._isLoading.next(false);
   }
}
