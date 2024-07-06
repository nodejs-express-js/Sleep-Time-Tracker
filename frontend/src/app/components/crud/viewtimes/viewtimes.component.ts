import { Component } from '@angular/core';
import { SleeptimesService } from '../../../service/sleeptimes.service';
import { sleepTimesType } from '../../../service/sleeptimes.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../../service/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewtimes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewtimes.component.html',
  styleUrl: './viewtimes.component.css'
})
export class ViewtimesComponent {
 public sleeptimes: sleepTimesType[] = [];
constructor(private sleeptimesservice: SleeptimesService,private userservice:UserService){
this.sleeptimesservice.sleeptimes$.subscribe(sleeptimes =>{this.sleeptimes=sleeptimes;});
}


}
