import { CanActivateFn } from '@angular/router';
import { UserService } from '../service/user.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
export const authguardGuard: CanActivateFn = (route, state) => {
  const userservice=inject(UserService);
  const router=inject(Router);

  return userservice.user$.pipe<boolean>(map(user=>{
    if(user.token==="" || user.token===null || user.token===undefined){
      router.navigate(['/login']);
      return false;
    }
    return true;
  }));
};
