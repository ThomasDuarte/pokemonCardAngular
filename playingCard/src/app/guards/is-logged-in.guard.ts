import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';
import { inject } from '@angular/core';
import { catchError, map } from 'rxjs';

export const isLoggedInGuard: CanActivateFn = (route, state) => {
  const logginService = inject(LoginService);
  const router = inject(Router);

  // On ne sait pas si l'utilisateur est loggé ou non
  if (logginService.user() === undefined) {
    return logginService.getUser().pipe(
      map((_) => {
        return true;
      }),
      catchError((_) => router.navigate(['login']))
    );
  }

  // L'utilisateur n'est pas loggé
  if (logginService.user() === null) {
    router.navigate(['login']);
  }

  return true;
};
