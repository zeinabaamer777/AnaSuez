import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Language } from 'src/app/config/language';
import { OrderModel } from 'src/app/models/OrderModel';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
import { OrderUsersModel } from 'src/app/models/OrderUsersModel';

@Component({
  selector: 'customer-service',
  templateUrl: './customer-service.component.html',
  styleUrls: ['./customer-service.component.css']
})
export class CustomerServiceComponent implements OnInit {
  myOrders:OrderModel[];
   OrderUsersModel:OrderUsersModel[];
  hideApprove:boolean; 
  clicked = false;

order:number;
  constructor(private _orderService:OrderService,private translate: TranslateService,private lang: Language) { }

  ngOnInit() {
    debugger
    this._orderService.GetShippedCompleteOrder().subscribe((res)=>{
      debugger;
      this.myOrders=res.Orders as OrderModel[];
    });

    // this._orderService.GetGetShippedCompleteOrderTrader().subscribe((res)=>{
    //   debugger;
    //   this.OrderUsersModel=res.OrderUsersList as OrderUsersModel[];
    // });

    
  }
   GetOrderByStatus(event)
  {
    //return this.api.get("Order/GetAllOrder?statusId="+statusId);
    //
    debugger
    this._orderService.GetAllOrder(event).subscribe((res)=>{
      debugger;
      this.myOrders=res.Orders as OrderModel[];
    });
  }
  CloseOrder(event,eventmouse)
  {
    debugger
    this.order=event
    this._orderService.CloseOrder(this.order).subscribe((res)=>{
      debugger;
      Swal.fire({
        text: res.Message,
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: this.translate.instant('general.ok')
      })
      
    });
    eventmouse.target.disabled = true;
  }
  CloseTraderOrder(event,eventmouse)
  {
    debugger
    this.order=event
    this._orderService.CloseTraderOrder(this.order).subscribe((res)=>{
      debugger;
      Swal.fire({
        text: res.Message,
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: this.translate.instant('general.ok')
      })
      //this.hideApprove=true;
      eventmouse.target.disabled = true;
    });
  }
}
