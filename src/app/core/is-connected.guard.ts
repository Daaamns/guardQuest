import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const isConnectedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userService = inject(UserService);
  const userRole = userService.getRole();
  if (userRole == 'USER' || userRole == 'ADMIN') {
    return true;
  }
  router.navigate(['']);

  return false;
};
