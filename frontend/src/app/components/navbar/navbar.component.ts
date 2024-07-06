import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
user={email:"",token:"",error:"",isloading:false}

constructor(private userservice: UserService,private router:Router){
this.userservice.user$.subscribe(user =>{this.user=user;})
}
home(){
  this.router.navigate(['/'])
}
login(){
this.router.navigate(['/login'])
}
signup(){
  this.router.navigate(['/signup'])

}
logout(){
  this.userservice.logout();
  this.router.navigate(['/login'])

}
}
