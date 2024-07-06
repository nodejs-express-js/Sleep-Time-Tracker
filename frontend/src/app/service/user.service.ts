import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SleeptimesService } from './sleeptimes.service';

type userType={
  email:string,
  token:string,
  error:string,
  isloading:boolean,
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user=new BehaviorSubject({email:"",token:"",error:"",isloading:false});
  public user$=this.user.asObservable()
  
  constructor() {
  }
  setUser(data:userType){
    this.user.next(data)
  }
  login(){
  }
  logout(){
    this.user.next({email:"",token:"",error:"",isloading:false})
  }
}
