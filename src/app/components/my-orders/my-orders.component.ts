import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { OrderModel } from 'src/app/models/OrderModel';
import { Language } from 'src/app/config/language';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  myOrders:OrderModel[];
  p: number = 1;
  pageSize: number = 20;
  total: number = 0;

  constructor(private _orderService:OrderService,private lang: Language) { }

  ngOnInit() {
    this.LoadOrder(this.p);
  }
  LoadOrder(Pagenumber)
  {
    this.p = Pagenumber;
    this._orderService.GetAllOrderFilterByUserParameter(0,this.p).subscribe((res)=>{
      debugger;
      this.myOrders=res.Orders as OrderModel[];
      this.total = res.TotalItems;
    });
  }
  GetOrderByStatus(event)
  {
    debugger
    this._orderService.GetAllOrderFilterByUser(event).subscribe((res)=>{
      
      this.myOrders=res.Orders as OrderModel[];
    });
  }
}
