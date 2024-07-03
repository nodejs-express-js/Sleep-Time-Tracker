import { CanActivateFn } from '@angular/router';
import { UserService} from './services/user.service';
import { ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { map } from 'rxjs';


export const authguardGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  
  const userservice=inject(UserService)

  return userservice.isAuthenticated();
};
