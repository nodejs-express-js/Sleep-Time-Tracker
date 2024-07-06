import { Component } from '@angular/core';
import { SleeptimesService,sleepTimesType } from '../../../service/sleeptimes.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { UserService } from '../../../service/user.service';
@Component({
  selector: 'app-deletetime',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deletetime.component.html',
  styleUrl: './deletetime.component.css'
})
export class DeletetimeComponent {
sleeptimes:sleepTimesType[]=[]
user={email:"",token:"",error:"",isloading:false}
error=""
constructor(private userservice:UserService,private sleeptime:SleeptimesService,private http:HttpClient){
this.sleeptime.sleeptimes$.subscribe(sleeptimes =>{this.sleeptimes=sleeptimes})
this.userservice.user$.subscribe(user=>{this.user=user})
}
deleteitem(id:number){
  this.error=""
  try{
    this.http.request('delete',environment.deletesleeptimes,{
      body:{id:id},
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${this.user.token}`
      }
    })
     .subscribe({
      next: (data) => {
        this.sleeptime.deleteSleepTimes(id)
      },
      error: (err) => {
        this.error=err.error.message;
        console.log(err);
      }
     })
  }
catch(error) {
 this.error="something went wrong with your request" 
}
}
}
