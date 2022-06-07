   /* { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from 'src/app/services/user.service';
 @Injectable({
    providedIn:'root'
})
export class UserGuard implements CanActivate{
    constructor(private _loginService:UserService,private router:Router){}
   canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       
          if(this._loginService.isLoggedIn())
            {

                return true
            }
            this.router.navigate(['login'])
            return false;
    }

}*/