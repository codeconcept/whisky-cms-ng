import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddCookieInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`AddCookieInterceptor intercepted ${req.url} with method ${req.method}`);

    const reqWithCookie: HttpRequest<any> = req.clone({
      withCredentials: true
    });

    return next.handle(reqWithCookie);
  }
}