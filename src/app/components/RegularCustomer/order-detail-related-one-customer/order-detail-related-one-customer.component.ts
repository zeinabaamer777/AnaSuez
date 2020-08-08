import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/config/language';
import { OrderService } from 'src/app/services/order.service';
import { OrderItemsModel } from 'src/app/models/OrderItemsModel';
import { OrderUsersService } from 'src/app/services/order-users.service';
import Swal from 'sweetalert2';
import { debug } from 'util';

@Component({
  selector: 'app-order-detail-related-one-customer',
  templateUrl: './order-detail-related-one-customer.component.html',
  styleUrls: ['./order-detail-related-one-customer.component.css']
})
export class OrderDetailRelatedOneCustomerComponent implements OnInit {
  items:OrderItemsModel[];
  orderId:number;
  Approve:boolean=true;

  ApproveResult:boolean
  constructor(private _orderService: OrderService,private route: ActivatedRoute,
    private lang: Language, 
    private router:Router ,
    private orderUsersService:OrderUsersService ,

    private translate: TranslateService) { }

  ngOnInit() {
    debugger
    
    this.route.params.subscribe(params => {
      debugger
      if (params["id"]) 
      {
        this.orderId=params["id"];
       debugger 
        this._orderService.getOrderItemsDetails(params["id"]).subscribe((res) => {
         this.items=res.OrdersItems as OrderItemsModel[];
        });
      }

      
    });
    //OrderUsersService

    this.route.params.subscribe(params => {

      debugger
      if (params["id"]) 
      {
        //this.orderId=params["id"];
       debugger 
        this.orderUsersService.GetOrderItemsStatus(this.orderId).subscribe((res) => {
        this.ApproveResult =res.Approve
        
        });
      }

      
     });


  }
  Save(id,approve)
  {
    debugger;
      this._orderService
      .TraderApprovePerOrderItem(id,approve)
      .subscribe((res)=>{
        Swal.fire({
          title: '',
          text: this.translate.instant('messages.Add')      ,
          icon: 'success',
          showCancelButton: false,
          confirmButtonText: this.translate.instant('general.ok')      
       
        });
      })
      //event.target.disabled = true;
     // this.Approve=false;
      this.ApproveResult=approve;
  }
}
// this._cityService.loadCities().subscribe((res) => {
//       this.cities = res.cities;
//       debugger;
//     });