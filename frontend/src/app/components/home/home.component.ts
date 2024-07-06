import { Component } from '@angular/core';
import { SleeptimesService } from '../../service/sleeptimes.service';
import { AddtimeComponent } from '../crud/addtime/addtime.component';
import { ViewtimesComponent } from '../crud/viewtimes/viewtimes.component';
import { DeletetimeComponent } from '../crud/deletetime/deletetime.component';
import { CommonModule } from '@angular/common';

type selectType="viewtimes"|"deletetime"|"addtime"
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AddtimeComponent,ViewtimesComponent,DeletetimeComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
public selected:selectType="viewtimes"

addtime(){
  this.selected="addtime"
}

viewtimes(){
  this.selected="viewtimes"
}
deletetimes(){
  this.selected="deletetime"
}
}
