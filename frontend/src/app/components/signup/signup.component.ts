import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
name:string;email:string;password:string;error:string;http:HttpClient;userservice:UserService;router:Router;
constructor(http:HttpClient,userservice:UserService,router:Router) {
  this.name='';this.email='';this.password='';this.error='';
  this.userservice=userservice;
  this.router=router;
  this.http=http;
}
signup(){
  if(!this.name || !this.email || !this.password){
    this.error="please enter a name and email and password"
    return;
  }
  this.error='';
  const headers=new HttpHeaders().set('Content-Type', 'application/json');
  try{
    this.userservice.setUser({email:"",token:"",error:"",isloading:true})

    this.http.post<{email:string,token:string}>("http://localhost:8000/users/signup",{
      name: this.name,
      email: this.email,
      password: this.password
      
    },{headers:headers}).subscribe({
      next:(data)=>{
        this.userservice.setUser({email:data.email,token:data.token,error:"",isloading:false})
        this.name='';this.email='';this.password='';
        this.router.navigate(['/'])
      },
      error:err=>{this.error=err.message
        console.log(err)
        this.userservice.setUser({email:"",token:"",error:err.message,isloading:false})
      }
    })
  }
  catch(err){
  this.error="something wrong with server"
  this.userservice.setUser({email:"",token:"",error:"something wrong with server",isloading:false})

  }
  

  }

}
