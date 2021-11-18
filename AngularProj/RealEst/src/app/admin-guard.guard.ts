import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from './IUser';

@Injectable({
  providedIn: 'root',
})
export class AdminGuardGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    var authUser : any = sessionStorage.getItem('authUser');
    authUser = JSON.parse(authUser);
    var role : string = authUser.user;
    console.log(role);
    console.log(route.data['Role']);
    
    
    const isAuthorized =   role.includes(route.data['Role']);
    if(!isAuthorized){
      this.router.navigate(['/home']);
    }else{
      return true;
    }
     return false;
  }
}
