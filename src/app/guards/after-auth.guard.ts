import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenServiceService } from '../services/token-service.service';

@Injectable({
  providedIn: 'root',
})
export class AfterAuthGuard implements CanActivate {
  constructor(
    private tokenService: TokenServiceService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.tokenService.loggedIn()) {
      this.router.navigateByUrl('/');
      return false;
    }

    return true;
  }
}
