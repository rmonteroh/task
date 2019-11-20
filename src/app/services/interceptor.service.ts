import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import { nextTick } from 'q';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request, next) {
    const rq = request.clone({
      setHeaders: {
        'Content-Type': 'application/json'
      }
    });
    return next.handle(rq);
  }
}
