import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUser } from 'src/app/models/user.model';

// local storage user key
export const LS_USER_KEY = 'USR_';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly http: HttpClient, private readonly router: Router) {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  login(email: string, password: string): Observable<IUser> {
    return this.http
      .post<IUser>(`${environment.restApi}/login`, {
        email,
        password
      })
      .pipe(
        map(result => {
          localStorage.setItem(`${LS_USER_KEY}INFO`, JSON.stringify(result));
          return result;
        })
      );
  }

  getUserInfo(): IUser {
    return JSON.parse(localStorage.getItem(`${LS_USER_KEY}INFO`));
  }
}
