import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as messageActions from 'src/app/store/actions/message.actions';
import { IUser } from 'src/app/models/user.model';
import { AppState } from 'src/app/store/app.state';
import { environment } from 'src/environments/environment';

// local storage user key
export const LS_USER_KEY = 'USR_';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly http: HttpClient, private readonly router: Router, private store: Store<AppState>) {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  login(email: string, password: string): void {
    this.http
      .put<IUser>(`${environment.restApi}login`, {
        email,
        password
      })
      .subscribe(
        (user: IUser) => {
          localStorage.setItem(`${LS_USER_KEY}INFO`, JSON.stringify(user));
          this.router.navigate(['/dashboard']); // TODO get initial view from roles? tbd
        },
        err => {
          console.error(err);
          this.store.dispatch(new messageActions.SendMessageError(err.message));
        }
      );
  }

  getUserInfo(): IUser {
    return JSON.parse(localStorage.getItem(`${LS_USER_KEY}INFO`));
  }
}
