import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../_models/login.model';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
   providedIn: 'root',
})
export class AuthService {
   token: string = null;

   constructor(private http: HttpClient) {}

   login(login: LoginModel) {
      return this.http.post<{ token: string }>(environment.apiUrl + 'auth/login/', login).pipe(
         map((res) => {
            if (res) {
               localStorage.setItem('token', res.token);
            }
         }),
      );
   }
}
