import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/models/OrderModel';
import { OrderService } from 'src/app/services/order.service';
import { Language } from 'src/app/config/language';
import { OrderUsersService } from 'src/app/services/order-users.service';

@Component({
  selector: 'managment-regular-tasks',
  templateUrl: './managment-regular-tasks.component.html',
  styleUrls: ['./managment-regular-tasks.component.css']
})
export class ManagmentRegularTasksComponent implements OnInit {
  myOrders:OrderModel[];
  constructor(private _orderUsersService:OrderUsersService,private lang: Language) { }


  ngOnInit() {
    this._orderUsersService.GetAll().subscribe((res)=>{
      debugger;
      this.myOrders=res.Orders as OrderModel[];
    });
  }

}
