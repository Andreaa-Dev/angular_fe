// admin.guard.ts
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { RoleService } from '../app/services/role.services';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private roleService: RoleService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.roleService.hasRole('admin')) {
      return true;
    } else {
      // Redirect to a different page or show an error message
      this.router.navigate(['/']);
      return false;
    }
  }
}
