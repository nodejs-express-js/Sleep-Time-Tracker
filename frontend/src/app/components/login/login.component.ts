import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
email:string;
password:string;
userservice:UserService;
http:HttpClient;
router:Router;
constructor(userservice:UserService,http:HttpClient,router:Router){
  this.email='';
  this.password='';
  this.userservice=userservice;
  this.http=http;
  this.router=router;
}
login(){
  console.log(this.email,this.password)
  const headers=new HttpHeaders()
  headers.set('Content-Type', 'application/json');
  this.userservice.setUser({email:"",token:"",error:"",isloading:true})
  const response=this.http.post("http://localhost:8000/users/login",{email:this.email,password:this.password},{headers:headers})
  response.subscribe({
    next:(data:any)=>{
      this.userservice.setUser({email:data.email,token:data.token,error:"",isloading:false})
      this.router.navigate(['/']);
    },
    error:err=>{this.userservice.setUser({email:"",token:"",error:err.message,isloading:false})}
  })
  
}
}
