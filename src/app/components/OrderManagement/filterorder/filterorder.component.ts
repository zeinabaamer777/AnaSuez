import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OrderStatusService } from 'src/app/services/order-status-service.service';
import { OrderStatusModel } from 'src/app/models/OrderStatusModel';
import { TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/config/language';
import { debug } from 'util';

@Component({
  selector: 'filterorder',
  templateUrl: './filterorder.component.html',
  styleUrls: ['./filterorder.component.css']
})
export class FilterorderComponent implements OnInit {
orerStatus:OrderStatusModel[];
selectStatus: number = 0;
index:number;
DateFrom;
DateTo;
@Output() statusId=new EventEmitter<{Id:number,DateFrom:Date,DateTo:Date }>();

  constructor( private _orderStatusService:OrderStatusService,
    private translate: TranslateService,private lang: Language) { }

  ngOnInit() {
    this._orderStatusService.GetStatusOrder().subscribe((res) => {
      debugger
      this.orerStatus=res.OrderStatuses;
    });
  this.DateFrom = new Date().toISOString().substring(0, 10);
  this.DateTo = new Date().toISOString().substring(0, 10);

  }
  getStatus(event)
  {
    debugger;
    this.index=event.target.selectedIndex-1;
    this.selectStatus=this.orerStatus[this.index].Id; 
  }
  GetOrder(event)
  {
    debugger
    this.statusId.emit({Id:this.selectStatus,DateFrom:this.DateFrom,DateTo:this.DateTo})
    //this.cityId.emit({Id:this.cities[this.index].Id });
    //
  }
}
