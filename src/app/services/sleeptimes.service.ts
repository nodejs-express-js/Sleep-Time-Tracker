import { Injectable } from '@angular/core';
import data from './data'

export type sleepTimeType={
  id:number,
  time:number,
  date:string
}

@Injectable({
  providedIn: 'root'
})
export class SleeptimesService {
  sleeptimes:sleepTimeType[]=data;
  constructor() { 
  }
  getSleeptimes(){
    return this.sleeptimes;
  }
}
