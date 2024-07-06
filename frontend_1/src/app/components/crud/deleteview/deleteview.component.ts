import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { SleeptimesService,sleepTimeObject } from '../../../services/sleeptimes.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-deleteview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deleteview.component.html',
  styleUrl: './deleteview.component.css'
})
export class DeleteviewComponent {

user={email:"",token:"",error:"",isloading:false}
sleeptimes:sleepTimeObject[]=[]
error=""
constructor(private userservice: UserService,private sleeptimesservice:SleeptimesService,private http:HttpClient)
{
this.userservice.userObservable.subscribe(user =>{this.user=user})
this.sleeptimesservice.sleepTimes$.subscribe(sleeptimes=>{this.sleeptimes=sleeptimes})
}
deleteSleepTime(id:number){
const headers = new HttpHeaders({'Content-Type': 'application/json',"authorization":`Bearer ${this.user.token}`});
this.error=""
this.http.request('delete',"http://localhost:8000/sleepTimes",{body:{id:id},headers:headers})
.subscribe({
  next: (data) => {
    const newsleeptimes=this.sleeptimes.filter((s)=>s.id!==id)
    this.sleeptimesservice.setSleepTimes([...newsleeptimes])
  },
  error: (err) => {
    this.error="some thing went wrong with the request"
    console.error(err);
  }
})

}
}
