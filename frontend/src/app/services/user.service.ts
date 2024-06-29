import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export type loginType={
  email:string,
  token:string,
  error:string,
  isloading:boolean
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSource=new BehaviorSubject<loginType>({email:"",token:"",error:"",isloading : false});
  userobservable=this.userSource.asObservable();
  
  setUsers(data:loginType){
    this.userSource.next(data)
  }

}
