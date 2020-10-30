import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  orderStatus: any;

  data : Observable<any>;

  constructor() { }

  ngOnInit(): void {

    this.data = new Observable(observer =>{
      //Business logic come here
      setTimeout(() => {
        observer.next("In Progress");
      }, 2000);

      //Business logic come here
      setTimeout(() => {
        observer.next("Processing");
      }, 5000);

      //Business logic come here
      setTimeout(() => {
        observer.next("Completed");
      }, 8000);

      setTimeout(() => {
        observer.error();
      }, 8000);

      //It will no more listen or track changes
      //how to complete the observable
      setTimeout(() => {
        observer.complete();
      }, 10000);

      setTimeout(() => {
        observer.next("After Completion"); //It will not show the data because we have  completed it
      }, 12000);

     
    });
    
    this.data.subscribe(val =>{

      this.orderStatus= val;   //First subscription
    });

    this.data.subscribe(val2 =>{

      console.log("Second Subscription");  //Second subscription
    });
  }

}
