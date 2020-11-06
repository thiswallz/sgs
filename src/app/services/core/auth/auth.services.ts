import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

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
    return this.http.put<IUser>(`${environment.restApi}/login`, {
      email,
      password
    });
  }

  setUserInfo(user: IUser) {
    localStorage.setItem(`${LS_USER_KEY}INFO`, JSON.stringify(user));
  }

  getUserInfo(): IUser {
    return JSON.parse(localStorage.getItem(`${LS_USER_KEY}INFO`));
  }
}
