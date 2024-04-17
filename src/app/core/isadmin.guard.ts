import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const isadminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userService = inject(UserService);
  const userRole = userService.getRole();
  if (userRole == 'ADMIN') {
    return true;
  }
  router.navigate(['']);
  return false;
};
