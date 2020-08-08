import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/models/OrderModel';
import { OrderUsersService } from 'src/app/services/order-users.service';
import { Language } from 'src/app/config/language';

@Component({
  selector: 'management-regular-tasks-for-one-customer',
  templateUrl: './management-regular-tasks-for-one-customer.component.html',
  styleUrls: ['./management-regular-tasks-for-one-customer.component.css']
})
export class ManagementRegularTasksForOneCustomerComponent implements OnInit {
  myOrders:OrderModel[];
  constructor(private _orderUsersService:OrderUsersService,private lang: Language) { }


  ngOnInit() {
    this._orderUsersService.GetAll().subscribe((res)=>{
      debugger;
      this.myOrders=res.Orders as OrderModel[];
    });
  }
}
