import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 userservice:UserService;
 router:Router;
 user={email:"",token:"",error:"",isloading:false};
 
 constructor(userservice:UserService,router:Router){
  this.router=router;
  this.userservice = userservice;
  userservice.userObservable.subscribe({
    next:(user)=>{this.user=user;},
    error:()=>{this.user={
      email:"",token:"",error:"something went wrong with the server",isloading:false}
    }
  })
 }
 home() {
  this.router.navigate(['/'])
 }
 login(){
  this.router.navigate(['/login'])
 }
 signup(){
  this.router.navigate(['/signup']);
 }
 logout(){
  
  this.userservice.setUser({email:"",token:"",error:"",isloading:false})
 }
}
