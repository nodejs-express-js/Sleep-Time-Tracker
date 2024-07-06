import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { SleeptimesService,sleepTimesType } from '../../service/sleeptimes.service';
import { map } from 'rxjs';
type loginResponse={
  email: string,
  token: string
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  user={email:"",token:"",error:"",isloading:false}
  email:string;
  password:string;
  error:string;
  constructor(private userservice:UserService,private http:HttpClient,private router:Router,private sleeptimes:SleeptimesService) {
    this.email = '';
    this.password = '';
    this.error = '';
    this.userservice.user$.subscribe(user=>{this.user=user})
  }
  login(){
    
    this.error="";
    if(!this.email || !this.password){
      this.error="please enter email and password"
      return;
    }
    this.userservice.setUser({email:"",token:"",error:"",isloading:true})
    try{
    const headers=new HttpHeaders({'Content-Type': 'application/json'})
    this.http.post<loginResponse>(environment.login,{email:this.email,password:this.password},{headers})
    .pipe(map((data)=>{

      this.http.get<sleepTimesType[]>(environment.getsleeptimes,{headers:new HttpHeaders({'Content-Type': 'application/json','authorization':`Bearer ${data.token}`})})
      .subscribe({
        next:data=>{
          this.sleeptimes.setsleepTimes(data)
        },
        error:e=>{
          this.error=e.error.message
        }
      })

      return data;
    })).subscribe({
      next:data=>{
        this.userservice.setUser({email:data.email,token:data.token,error:"",isloading:false})
        this.router.navigate(['/'])

      },
      error:e=>{
        this.error=e.error.message
        this.userservice.setUser({email:"",token:"",error:e.error.message,isloading:false})
      }
    })

    }
    catch(error){
    this.error="somethin went wrong with server"
    this.userservice.setUser({email:"",token:"",error:"",isloading:false})

    }
  }
}
