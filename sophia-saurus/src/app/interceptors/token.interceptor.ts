import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { first, mergeMap, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { environment } from 'environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private authSvc: AuthService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.authSvc.currentUser$.pipe(
      first(),
      mergeMap(
        (user: User) => {

          if (request.url.startsWith(environment.apiHost)) {
            let headersWithToken = request.headers.append('client-token', `Bearer ${user.getToken()}`);
            
            request = request.clone({ headers: headersWithToken });
          }

          return next.handle(request);
        })
    );
  }
}
