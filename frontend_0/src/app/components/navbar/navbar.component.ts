import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService ,loginType} from '../../services/user.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 user:loginType={email:"",token:"",error:"",isloading : false};
constructor(private userservice: UserService){
  userservice.userobservable.subscribe({
    next:(user) =>{this.user = user},
   error:(error)=>{this.user={email:"",token:"",error:"something went wrong with the server",isloading : false}}
  });
}


}
