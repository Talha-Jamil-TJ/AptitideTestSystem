import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {NzNotificationService} from 'ng-zorro-antd';

export class ErrorInterceptor implements HttpInterceptor {
   constructor(private _notification: NzNotificationService) {}
   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(req).pipe(
         catchError((error: HttpErrorResponse) => {
            console.log(`ErrorInterceptor error: `, error);

            if (typeof error.error === 'object') {
               if (error.error.errors) {
                  // let errorMessage = '';
                  for (const message in error.error.errors) {
                     if (message) {
                        for (const err of error.error.errors[message]) {
                           console.log(`MY ERRORS: `, err);
                           this._notification.error('Error', err);
                           // errorMessage = `${errorMessage} ${err}`;
                           // console.log(`MY ERROR MESSAGE: `, errorMessage);
                        }
                     }
                  }
               }
            }

            if (typeof error.error === 'string') {
               this._notification.error('Error', error.error);
            }

            return throwError(error);
         }),
      );
   }
}
