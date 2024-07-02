import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
  private userSource=new BehaviorSubject<userType>(
    {email:"",token:"",error:"",isloading:false}
  )
  userObservable=this.userSource.asObservable();
  constructor() { 

  }
  setUser(data:userType) {
    this.userSource.next(data);
  }
  isAuthenticated():boolean {
  const user=this.userSource.getValue()
  return user.token!=="" && user.token!==undefined && user.token!==null;
  }
}
