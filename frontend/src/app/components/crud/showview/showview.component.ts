import { Component } from '@angular/core';
import { SleeptimesService,sleepTimeObject } from '../../../services/sleeptimes.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-showview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './showview.component.html',
  styleUrl: './showview.component.css'
})
export class ShowviewComponent {
sleepTimesArray:sleepTimeObject[]=[];
constructor(public sleeptimesservice:SleeptimesService){
this.sleeptimesservice.sleepTimes$.subscribe((data)=>{
  this.sleepTimesArray=data; 
})
}

}
