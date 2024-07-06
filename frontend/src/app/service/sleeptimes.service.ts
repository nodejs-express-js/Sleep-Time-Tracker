import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export type sleepTimesType={
id:number,
time:number,
date:string,
createdAt:string,
updatedAt:string,
userId:number
}


@Injectable({
  providedIn: 'root'
})
export class SleeptimesService {
  private sleeptimes=new BehaviorSubject<sleepTimesType[]>([]);
  public sleeptimes$=this.sleeptimes.asObservable()
  constructor() {

  }
  addSleepTime(data:sleepTimesType):void {
    this.sleeptimes.next([...this.sleeptimes.value,data])
  }
  setsleepTimes(data:sleepTimesType[]):void{
    this.sleeptimes.next(data)
  }
  deleteSleepTimes(id:number):void{
    const data=this.sleeptimes.value.filter((sleep)=>id!==sleep.id)
    this.sleeptimes.next([...data])
  }
}
