import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'sales-support-order-portal',
  templateUrl: './sales-support-order-portal.component.html',
  styleUrls: ['./sales-support-order-portal.component.css']
})
export class SalesSupportOrderPortalComponent implements OnInit {
  showPart:boolean=false;
  orderIdValue:number;
  //ordertype=ordertypeValue;
  isShown: boolean = false ; // hidden by default
  @Input() orderId:number;
  @Input() ordertypeValue:string ;
  ordertype="Plant";
  //ordertype=this.ordertypeValue;
  
  @Output() user=new  EventEmitter<{userName:string ,Id:number }>();
  constructor(private orderService:OrderService, private transalte:TranslateService) { }

  ngOnInit() {
    debugger
  //this.ordertype=this.ordertypeValue;

  }
  enableDisablePart()
  {
    debugger
    this.showPart=true
  }
  getUser(event)
  {
    debugger
    this.user.emit({userName:event.Username ,Id:event.Id });
  }

  SaveOrder()
  {
    
    this.orderService.UpdateTypeOrder(this.orderId).subscribe((res) => {
      Swal.fire({
        text: res.Message,
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: this.transalte.instant('general.ok')
      })
      //this.modes = res.list as ResetModes[]; 
      //debugger;
    });
    //UpdateTypeOrder
  }

  toggleShow(value) {

  this.isShown = value;

  }
}
