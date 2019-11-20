import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { RequesterService } from '../services/requester.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private rq: RequesterService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.rq.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
