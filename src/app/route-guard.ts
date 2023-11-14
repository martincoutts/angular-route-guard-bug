import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateFn,
} from '@angular/router';

export const canDeactivateRoute: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  alert(
    `Route guard active!

  If this alert is being displayed the URL should be: /${state.url}

  It is currently: ${window.location.pathname}`
  );

  return false;
};
