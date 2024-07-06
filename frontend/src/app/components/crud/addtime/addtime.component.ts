import { Component } from '@angular/core';
import { SleeptimesService,sleepTimesType } from '../../../service/sleeptimes.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { UserService } from '../../../service/user.service';


@Component({
  selector: 'app-addtime',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addtime.component.html',
  styleUrl: './addtime.component.css'
})
export class AddtimeComponent {
public sleeptime={time:0,date:new Date().toISOString().split('T')[0]}
error:string='';
user={
  email: "",
  token: "",
  error: "",
  isloading: false
}

constructor(private sleeptimeservice:SleeptimesService,private http:HttpClient,private userservice:UserService){
this.userservice.user$.subscribe(user=>{this.user=user;})
}

addTime(){
  if(this.sleeptime.time<0 || this.sleeptime.time>24){
    this.error="Time should be between 0 and 24"
    return
  }
  const date=new Date(this.sleeptime.date)
  try{
    const headers=new HttpHeaders({'Content-Type': 'application/json','authorization': `Bearer ${this.user.token}`})
    this.http.post<sleepTimesType>(environment.postsleeptimes,{time:this.sleeptime.time,date:date},{headers:headers})
    .subscribe({
      next:data=>{
        this.sleeptimeservice.addSleepTime(data)
        this.error="Time added successfully"
      },
      error:err=>{
        this.error=err.error.message
      }
    })
  }
  catch(err){
  this.error="something went wrong with the request"
  }

}
}
