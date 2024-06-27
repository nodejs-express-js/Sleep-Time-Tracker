import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { EachdayComponent } from '../eachday/eachday.component';

import {SleeptimesService,sleepTimeType} from '../../services/sleeptimes.service'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,EachdayComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  sleeptimes:sleepTimeType[]=[]
constructor(public sleeptimesservice:SleeptimesService){
}

ngOnInit(){
  this.sleeptimes=this.sleeptimesservice.getSleeptimes()
  console.log(this.sleeptimes)
}

}
