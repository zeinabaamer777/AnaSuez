import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { CartService } from 'src/app/services/cart.service';
import { NotificationServiceService } from 'src/app/services/notification-service.service';

@Component({
  selector: 'app-fawry-details',
  templateUrl: './fawry-details.component.html',
  styleUrls: ['./fawry-details.component.css']
})
export class FawryDetailsComponent implements OnInit {

  CRN:string="";
  TOTAL:number=0;
  constructor(private _notificatoinService: NotificationServiceService,
    private _cartService: CartService,private _orderService: OrderService) { }
 
  ngOnInit() {
    this._orderService.FawryPay().subscribe((res)=>{
      this.CRN=res.CRN;
      this.TOTAL=res.OrderAmount;
      this._notificatoinService.UpdateNotificatoinCount(res.CartItemsCNT);
    });
  
  }

}
