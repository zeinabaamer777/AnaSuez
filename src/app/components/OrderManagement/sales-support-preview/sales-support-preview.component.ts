import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/models/OrderModel';
import { OrderService } from 'src/app/services/order.service';
import { Language } from 'src/app/config/language';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
import { OrderUsersModel } from 'src/app/models/OrderUsersModel';
import { CustomerServiceComponent } from '../customer-service/customer-service.component';
import { debug } from 'util';

@Component({
  selector: 'sales-support-preview',
  templateUrl: './sales-support-preview.component.html',
  styleUrls: ['./sales-support-preview.component.css']
})
export class SalesSupportPreviewComponent implements OnInit {
  myOrders:OrderModel[];
  OrderUsersModel:OrderUsersModel[];
  p: number = 1;
  pageSize: number = 20;
  total: number = 0;

  shipped:boolean=false;
  constructor(private _orderService:OrderService,private lang: Language,
    private  translate: TranslateService) { }

  ngOnInit() {
     
     this. LoadOrders(this.p)
    

    
    this._orderService.GetGetShippedCompleteOrderTrader().subscribe((res)=>{
      debugger;
      this.OrderUsersModel=res.OrderUsersList as OrderUsersModel[];
    });

    

  }
  LoadOrders(pageNumber)
  {
    this.p = pageNumber;

    this._orderService.GetPaiedPlantOrder(this.p).subscribe((res)=>{
      debugger;
      this.myOrders=res.Orders as OrderModel[];
      this.total = res.TotalItems;

    });
  }
  GetOrderByStatus(event)
  {
    debugger
    this._orderService.GetAllOrder(event).subscribe((res)=>{
      
      this.myOrders=res.Orders as OrderModel[];
    });
  }
  UpdateTypeOrderBySalesTeam(orderId)
  {
      this._orderService.UpdateTypeOrderBySalesTeam(orderId).subscribe((res)=>{
        this.shipped=true;
        debugger;
        Swal.fire({
          title: '',
          text: res.Message,
          icon: 'success',
          showCancelButton: false,
          confirmButtonText: this.translate.instant('general.ok')      
        });
      });
  }
  //order.Id
  //GetPaiedPlantOrder

 // myOrders:OrderModel[];


 
    
  }


