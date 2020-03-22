import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingSpinnerService } from './loadingSpinner.service';
import { finalize } from 'rxjs/operators';

@Injectable({
   providedIn: 'root',
})
export class LoadingSpinnerInterceptor implements HttpInterceptor {
   constructor(private loadingSpinnerService: LoadingSpinnerService) {}

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      this.loadingSpinnerService.show();

      return next.handle(req).pipe(finalize(() => this.loadingSpinnerService.hide()));
   }
}
