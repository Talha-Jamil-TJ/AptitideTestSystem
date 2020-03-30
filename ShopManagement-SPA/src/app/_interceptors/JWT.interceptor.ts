import {Injectable} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
   providedIn: 'root',
})
export class JWTInterceptor implements HttpInterceptor {
   constructor() {}

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = localStorage.getItem(`token`);
      // console.log(`JWTInterceptor token: `, token);

      if (token) {
         req = req.clone({
            setHeaders: {
               Authorization: `Bearer ${token}`,
            },
         });
      }

      return next.handle(req);
   }
}

export const jwtInterceptor = {
   provide: HTTP_INTERCEPTORS,
   useClass: JWTInterceptor,
   multi: true,
};
