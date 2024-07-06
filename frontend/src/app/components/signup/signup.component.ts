import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
type SignupType={
  email:string,
  token:string
}
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  public form={email: "",name:"",password:""}
  public user={email:"",token:"",error:"",isloading:false}

  constructor(private http:HttpClient,private userservice:UserService,private router:Router){
    this.userservice.user$.subscribe(user=>{this.user = user;})
  }

  signup(){
    if(this.form.email==="" || this.form.name=="" || this.form.password==""){
      this.user.error="All fields are required"
      return
    }
    this.userservice.setUser({email:"",token:"",error:"",isloading:true})
    try{
      const headers=new HttpHeaders({"Content-Type": "application/json"})
      this.http.post<SignupType>(environment.signup,{...this.form},{headers})
      .subscribe({
        next:data=>{
          this.userservice.setUser({email:data.email,token:data.token,error:"",isloading:false})
          this.router.navigate(["/"])
        },
        error:err=>{
          this.user.error=err.error.message
          this.userservice.setUser({email:"",token:"",error:err.error.message,isloading:false})

        }
      })
    }
    catch(error){
      this.user.error="something went wrong with your request"
      this.userservice.setUser({email:"",token:"",error:"something went wrong with your request",isloading:false})

    }

  }
}
