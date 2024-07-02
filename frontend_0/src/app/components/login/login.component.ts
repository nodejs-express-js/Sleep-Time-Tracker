import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

type loginType={
  email:string,
  token:string
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email=""
  password="";
  error="";
  http;router;
  constructor(private userservice: UserService,http:HttpClient,router:Router){
    this.http=http;
    this.router=router;
  }
  onSubmit(){
    if(!this.email || !this.password){
      this.error='Please enter email and password'
      return;
    }
    this.userservice.setUsers({email:"",token:"",error:"",isloading:true});
    const headers=new HttpHeaders().set('Content-Type', 'application/json');
    this.http.post<loginType>("http://localhost:8000/users/login",
      JSON.stringify({email: this.email, password: this.password}),
    {headers:headers})
    .subscribe({
      next:data=>{
        this.userservice.setUsers({email: data.email,token:data.token,error:"",isloading:false})
        this.router.navigate(['/'])
      },
      
      error:e=>{
        this.userservice.setUsers({email:"",token:"",error:e.message,isloading:false})        
      }
        
      }
    )
  }
}
