import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './services/auth.service';
import { catchError, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = this.authorizeRequest(req);

    return next.handle(authReq).pipe(
      // https://www.learnrxjs.io/learn-rxjs/operators/error_handling/
      catchError((error, caught) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status == 401) {
            this.auth.authorized.next(false);
            this.auth.authorize();
            return this.auth.authorized.pipe(
              filter(a => a == true),
              switchMap(() => next.handle(this.authorizeRequest(req)))
            );
          }
          return throwError(new Error(error.error.error.message));
        }
        // return []
        // return EMPTY
        // return NEVER
        return throwError(new Error(error.message));
      })
    );
  }

  private authorizeRequest(req: HttpRequest<any>) {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.auth.getToken()}`
      }
    });
  }
}
