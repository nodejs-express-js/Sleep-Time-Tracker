import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { ShowviewComponent } from '../crud/showview/showview.component';
import { AddviewComponent } from '../crud/addview/addview.component';
import { DeleteviewComponent } from '../crud/deleteview/deleteview.component';
import { CommonModule } from '@angular/common';



type showViewType="showview"|"addview"|"deleteview"


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ShowviewComponent, AddviewComponent, DeleteviewComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  currentView:showViewType="showview"
constructor() {

}

showView(){
this.currentView="showview";
}
addView(){
this.currentView="addview";
}
deleteView(){
  this.currentView="deleteview";
}

}
