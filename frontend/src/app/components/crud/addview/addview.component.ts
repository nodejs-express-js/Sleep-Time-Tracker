import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SleeptimesService,sleepTimeObject } from '../../../services/sleeptimes.service';
import { UserService } from '../../../services/user.service';
@Component({
  selector: 'app-addview',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addview.component.html',
  styleUrl: './addview.component.css'
})
export class AddviewComponent {
 time:number=0;
 sleeptimes:sleepTimeObject[]=[];
 date:string=new Date().toISOString().split('T')[0];
 error=""
 user={email:"",token:"",error:"",isloading:false}
constructor(private http:HttpClient,private sleeptimesservice:SleeptimesService,private userservice:UserService){
this.sleeptimesservice.sleepTimes$.subscribe((sleeptimes)=>{
  this.sleeptimes=sleeptimes; 
})
this.userservice.userObservable.subscribe((user)=>{
  this.user=user;
})
}
addSleepTime(){
  this.error=""
  const currdate=new Date(this.date).toISOString();
  const headers=new HttpHeaders({'Content-Type': 'application/json',"authorization":"Bearer "+this.user.token})
  this.http.post<sleepTimeObject>("http://localhost:8000/sleepTimes",{time:this.time,date:currdate},{headers:headers})
  .subscribe({
    next:data=>{
      this.sleeptimesservice.setSleepTimes([...this.sleeptimes,data])
      this.error="added successfully"
    },
    error:err=>{this.error="please check the inputs"}
  })
  this.error=""
}

}
