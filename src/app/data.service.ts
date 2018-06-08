import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';   //share data between components




@Injectable()                 
export class DataService {

  private goals = new BehaviorSubject<any>(['this initial goal', 'Another silly life goal'])
  // goals is an observable that saves data and notify all listeners on change.
  goal = this.goals.asObservable();
  
  constructor() {
   }

   changeGoal(goals) {
    this.setGoalsAndNotifyAll(goals);
   }

   setGoalsAndNotifyAll(goals) {
    this.goals.next(goals); 
    // .next(goals) saves the data and notify all listeners
  }

}
