import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { UserService,userType } from './user.service';



export type sleepTimeObject={
  id:number,
  time:number,
  date:string,
  userId:number,
  createdAt:string,
  updatedAt:string,
}

@Injectable({
  providedIn: 'root'
})
export class SleeptimesService {
  private sleepTimesSubject=new BehaviorSubject<sleepTimeObject[]>([]);
  sleepTimes$=this.sleepTimesSubject.asObservable();
  user:userType={email:"",token:"",error:"",isloading:false};
  constructor(private http:HttpClient,private userservice:UserService) {
  this.userservice.userObservable.subscribe((user)=>{
    this.user=user;
    if(this.user.token!==""){
      const headers=new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':"Bearer "+this.user.token
      })
      this.http.get<sleepTimeObject[]>("http://localhost:8000/sleepTimes",{headers:headers},).subscribe({
        next:(data)=>{this.setSleepTimes(data)},
        error:(err)=>{console.log(err)},
      })
    }
  })
  
  }
  setSleepTimes(data:sleepTimeObject[]):void {
    this.sleepTimesSubject.next(data);
  }
  
} 
