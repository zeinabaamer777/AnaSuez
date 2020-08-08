import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { ShippingToModel } from 'src/app/models/CartModels/ShippingToModel';
import { PAYMENT_URL, FawryPayment_URL, FrontEndMain } from 'src/app/config/globals';
import { OrderService } from 'src/app/services/order.service';
import { OrderItemsModel } from 'src/app/models/OrderItemsModel';
import { UPLOAD_URL } from 'src/app/config/globals';
import { Language } from 'src/app/config/language';
import { NotificationServiceService } from 'src/app/services/notification-service.service';
import { DestinationService } from 'src/app/services/destination.service';
import { DestinationModel } from 'src/app/models/DestinationModel';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { debug } from 'util';
import {Location} from '@angular/common';
import { OrderFawryPayModel } from 'src/app/models/OrderFawryPayModel';
import { DataServiceComponent } from '../data-service/data-service.component';
import { DataService } from 'src/app/services/data.service';
interface Scripts {
  name: string;
  src: string;
}
export const ScriptStore: Scripts[] = [
  //Stagin
  // { name: 'fawrypay',    src: 'https://atfawry.fawrystaging.com/ECommercePlugin/scripts/FawryPay.js' },
  // { name: 'fawryPlugin', src: 'https://atfawry.fawrystaging.com/ECommercePlugin/scripts/fawryPlugin.js'}

  //Production
  { name: 'fawrypay',    src: ' https://www.atfawry.com/ECommercePlugin/scripts/V2/FawryPay.js' },
  { name: 'fawryPlugin', src: 'https://atfawry.com/ECommercePlugin/scripts/fawryPlugin.js'}

 
  // { name: 'vfsFonts', src: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.59/vfs_fonts.js' }
];

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  successPageUrl:string;
  failerPageUrl:string;
  IsAuth: any = false;
  plist: ShippingToModel[];
  Total: number = 0;
  MobileOrder:number; //ngmodel
  @ViewChild('ContactOrder', {static: false}) ContactOrder:ElementRef;//viewchild

  OrderFawryPayModel:OrderFawryPayModel;
  OrderFawryPayModel_:string;
  DestinationOrder:number;
  cart_items: OrderItemsModel[];
  img_url: string = UPLOAD_URL;
  dests: DestinationModel[];
  urlstring:string;
  browserName:string;
  browserNameIE:boolean;
  debugger
   


  constructor(private router: Router, private translate: TranslateService,
     private _destService: DestinationService, 
     private _notificatoinService: NotificationServiceService, 
     private lang: Language, private _cartService: CartService, 
     private _orderService: OrderService,
     private document: Location,
     private dataService: DataService
     ) {

    this.IsAuth = true;
    // this._authService.GetUsers().subscribe((res)=>{
    //   this.IsAuth=true;
    // });
  }
  checkContacts()
  {
    debugger
    if(!this.ContactOrder.nativeElement.value ||!this.MobileOrder ||!this.DestinationOrder)
    return false;
    else
    return true;
  }

  loadCartCNT() {
    this._cartService.GetCartCount().subscribe((res) => {
      this._notificatoinService.UpdateNotificatoinCount(res.CartItemCount);
    });
  }
  FawryPay_()
  {
    debugger
    this.successPageUrl=FawryPayment_URL +"ReturnFromSuccessPay"//"https://mysuez.suezcem.com/AnaSuezBackend/api/FawryPayment/ReturnFromSuccessPay";//;
    this.failerPageUrl=FrontEndMain+"#/paymentError";//"https://mysuez.suezcem.com//paymentError";//
    this._orderService.FawryPay().subscribe((res) => {
      debugger
      this.OrderFawryPayModel=res as OrderFawryPayModel;
      
      this.urlstring='https://atfawry.com/ECommercePlugin/FawryPay.jsp?chargeRequest='+JSON.stringify(this.OrderFawryPayModel)+
      '&successPageUrl='+this.successPageUrl+'&failerPageUrl='+this.failerPageUrl+'';
       window.location.href=this.urlstring;

    });
  }
  pay() {
    debugger
   // if(this.checkContacts())
    window.location.href = PAYMENT_URL + "/Index";

    // this._cartService.payment(this.Total,"380786575823").subscribe
  }
  ContinueBy(DestinationId,MobileOrder,ContactOrder,Address)
  {
    this.dataService.Address=Address;
    this.dataService.ContactOrder=ContactOrder;
    this.dataService.MobileOrder=MobileOrder;
    this.dataService.DestinationId=DestinationId;
    localStorage.setItem('AddressOrder', Address);
    localStorage.setItem('MobileOrder', MobileOrder);
    localStorage.setItem('ContactOrder', ContactOrder);
    localStorage.setItem('DestinationOrder', DestinationId);

 
    this.router.navigateByUrl('/shopping');
  }

  calculateOrder() {
    this._orderService.calculateOrder().subscribe((res) => {
      this.Total = res.TotalPrice;
    });
  }

  updateDest(value) {
    debugger
    this.DestinationOrder=value.value;
    this._orderService.updateDestination(value.value).subscribe((res) => {
      this.Total = res.TotalPrice;
    }, (err) => {

    });
  }
  UpdateItem(item_id, Qty) {
    this._orderService.changeQTY(item_id, Qty).subscribe((res) => {
      this.Total = res.TotalPrice;
    });
  }
  RemoveFromCart(item_id) {


    Swal.fire({
      title: '',
      text: this.translate.instant('message.delconf'),
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: this.translate.instant('general.cancel'),
      confirmButtonText: this.translate.instant('general.ok')
    }).then((result) => {
      if (result.value) {
        debugger;
        this._orderService.RemoveFromCart(item_id).subscribe((res) => {
          Swal.fire({
            text: res.Message,
            icon: 'success',
            showCancelButton: false,
            confirmButtonText: this.translate.instant('general.ok')
          });
          this.Total = res.TotalPrice;
          this.loadCartItems();
          this.loadCartCNT();
        });
      }

    });



  }

  FawryPay() {
    this.debugger;
    //if(this.checkContacts())
    Swal.fire({
      title: '',
      text: this.translate.instant('message.fawrypay'),
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: this.translate.instant('general.cancel'),
      confirmButtonText: this.translate.instant('general.ok')
    }).then((result) => {
      if (result.value) {
        this.router.navigateByUrl('/fawrypay');
      
      }

    });

   
  }
  loadCartItems() {
    this._orderService.GetCartItems().subscribe((res) => {
      this.cart_items = res.OrdersItems as OrderItemsModel[];
      debugger;
    });
    this.calculateOrder();
  }
  confirmRclentOrder()
  {
    Swal.fire({
      title: '',
      text: "",
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: this.translate.instant('general.ok')
    })
  }
  loadDest() {
    this._destService.getDestinations().subscribe((res) => {
      this.dests = res.destinations as DestinationModel[];
    });
  }
  ngOnInit() {
    this.loadDest();
    // this._cartService.loadCartItems().subscribe((res) => {
    //   debugger;
    // });
    this.loadCartItems();
    this.browserNameIE=false;
    debugger

    this.browserName=this.getBrowserName();
    if(this.browserName=="trident")
    {
        this.browserNameIE=true;
    }

  }
  getBrowserName() {
    const agent = window.navigator.userAgent.toLowerCase()
    switch (true) {
      case agent.indexOf('edge') > -1:
        return 'edge';
      case agent.indexOf('opr') > -1 && !!(<any>window).opr:
        return 'opera';
      case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
        return 'chrome';
      case agent.indexOf('trident') > -1:
        return 'trident';
      case agent.indexOf('firefox') > -1:
        return 'firefox';
      case agent.indexOf('safari') > -1:
        return 'safari';
      default:
        return 'other';
    }
  }
}
