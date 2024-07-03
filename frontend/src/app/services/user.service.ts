import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable,map } from 'rxjs';
import { Router } from '@angular/router';
export type userType={
  email:string,
  token:string,
  error:string,
  isloading:boolean
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  router:Router;
  private userSource=new BehaviorSubject<userType>(
    {email:"",token:"",error:"",isloading:false}
  )
  userObservable=this.userSource.asObservable();
  constructor(router:Router) { 
  this.router=router;
  }
  setUser(data:userType) {
    this.userSource.next(data);
  }
  isAuthenticated():Observable<boolean> {
  return this.userSource.pipe(map(user=>{
    if(user.token!=="" && user.token!=null && user.token!=undefined){
      return true;
    }
    else{
      this.router.navigate(['/login'])
      return false;
    }
  }))
  }
}
