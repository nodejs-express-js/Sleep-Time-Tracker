import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { sleepTimeType } from '../../services/sleeptimes.service';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-eachday',
  standalone: true,
  imports: [],
  templateUrl: './eachday.component.html',
  styleUrl: './eachday.component.css'
})

export class EachdayComponent {
@Input() sleeptime?:sleepTimeType;

constructor(private user:UserService){

}

}
