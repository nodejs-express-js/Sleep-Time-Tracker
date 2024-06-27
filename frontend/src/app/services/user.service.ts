import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  login={email:"",password:""}
  constructor(private http:HttpClient,) {
    this.http=http; 
  }
  getUsers(){
    return this.login;
  }
  setUsers(){
    
  }

}
