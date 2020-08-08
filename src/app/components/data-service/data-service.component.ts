import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-data-service',
  templateUrl: './data-service.component.html',
  styleUrls: ['./data-service.component.css']
})
@Injectable()

export class DataServiceComponent implements OnInit {
    private messageSource = new BehaviorSubject('default message');
    DestinationId:number
    MobileOrder:number
    ContactOrder:number
    Address:string
    currentMessage = this.messageSource.asObservable();
    constructor() { }
    changeMessage(message: string) {
      this.messageSource.next(message)
    }
    ngOnInit() {
  }

}
