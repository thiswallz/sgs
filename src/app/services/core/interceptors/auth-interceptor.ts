import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.services';

export const TOKEN_HEADER = 'x-access-token';
const UNAUTHORIZED = 401;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getUserInfo()?.token;
    if (!token) {
      return next.handle(req);
    }
    req = req.clone({ headers: req.headers.set(TOKEN_HEADER, token) });

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => event),
      catchError((error: HttpErrorResponse) => {
        if (error.status === UNAUTHORIZED) {
          this.authService.logout();
        }
        const errorData = {
          reason: error && error.statusText,
          status: error.status
        };
        return throwError(errorData);
      })
    );
  }
}
