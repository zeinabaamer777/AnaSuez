import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel, ProductVmModel } from 'src/app/models/ProductModel';
import { Language } from 'src/app/config/language';
import { Subscription } from 'rxjs';
import { UPLOAD_URL } from 'src/app/config/globals';
import { OrderService } from 'src/app/services/order.service';
import { AddToCartModel } from 'src/app/models/AddToCartModel';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { NotificationServiceService } from 'src/app/services/notification-service.service';
import { debug } from 'util';
import { DestinationPriceModel } from 'src/app/models/DestinationPrice';
import { DataServiceComponent } from '../../data-service/data-service.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  message:string;

  p: number = 1;
  pageSize: number = 10;
  total: number = 0;
  subscription: Subscription;
  products: ProductModel[];
  productsVm:ProductVmModel[]
  destinationPriec:DestinationPriceModel[]
  img_url: string = UPLOAD_URL;
  cart: AddToCartModel;
  MobileOrder=localStorage.getItem("MobileOrder") //== 0 ? null :Number(localStorage.getItem("MobileOrder"));
  Address=localStorage.getItem("AddressOrder")
  ContactOrder=(localStorage.getItem("ContactOrder"));
 DestinationId=Number(localStorage.getItem("DestinationOrder"));

  itemPrice=10;
  lUserRoleName=localStorage.getItem("UserRoleName")
  // @ViewChild('ContactOrder', { static: false }) ContactOrder: ElementRef;//viewchild
  DestinationOrder: number;
  // localStorage.setItem('AddressOrder', this.Address);
  // localStorage.setItem('MobileOrder', this.MobileOrder.toString());
  // localStorage.setItem('ContactOrder', this.ContactOrder.toString());
  // localStorage.setItem('DestinationOrder', this.DestinationOrder.toString());

  constructor(private _notificatoinService: NotificationServiceService, private router: Router, 
    private translate: TranslateService, private _productService: ProductService, 
    private lang: Language, private _orderService: OrderService,private data: DataService) {
      // this.data.currentMessage.subscribe(message => this.message = message)

    this.subscription = this._productService.getProducts().subscribe((res) => {
      debugger
      this.products = res;
    });
    debugger
   

     if(this.data.DestinationId>0) 
     {
      this.MobileOrder=this.data.MobileOrder == null ? null : this.data.MobileOrder.toString();
      // if(this.MobileOrder==0)
      // this.MobileOrder=null;
      
      this.Address=this.data.Address;
      this.ContactOrder=this.data.ContactOrder.toString();
      this.DestinationId=this.data.DestinationId;
      this.DestinationOrder=this.data.DestinationId;
     }
     else{
      this.MobileOrder=localStorage.getItem("MobileOrder") == null ? null : localStorage.getItem("MobileOrder").toString()
      // if(this.MobileOrder==0)
      // this.MobileOrder=null;

      this.Address=localStorage.getItem("AddressOrder")
      this.ContactOrder=(localStorage.getItem("ContactOrder"));
     this.DestinationId=Number(localStorage.getItem("DestinationOrder"));
     // this.DestinationId=parseInt(localStorage.getItem("DestinationId"));    // 123 (much better)

      this.DestinationOrder=Number(localStorage.getItem("DestinationOrder"));
  
     }
     
     
    //  localStorage.setItem('AddressOrder', this.Address);
    //  localStorage.setItem('MobileOrder', this.MobileOrder.toString());
    //  localStorage.setItem('ContactOrder', this.ContactOrder.toString());
    //  localStorage.setItem('DestinationOrder', this.DestinationOrder.toString());

  }

  updateProduct(event) {
    this.p = event;
    this.loadProducts(this.p);
  }
  loadProducts(PageNumber) {
    debugger
    this._productService.loadProducts(PageNumber, 0).subscribe((res) => {
      this.products = res.Products as ProductModel[];
      this.total = res.TotalItems;
      debugger;
    });
  }
  loadProductsDestination(value)
  {
    debugger;
    this.DestinationOrder = value.value;
    
    if(!this.DestinationOrder) this.DestinationOrder=0
    this._productService.loadProductsDestination(this.p, this.DestinationOrder).subscribe((res) => {
      debugger
      this.productsVm = res.Products as ProductVmModel[];
      //this.total = res.TotalItems;
      if(this.data.DestinationId>0) 
     {
        this.DestinationOrder=this.data.DestinationId;
        this.loadProductsDestinationDirect(this.DestinationId);

     }
     else{
  
      this.DestinationOrder=Number(localStorage.getItem("DestinationOrder"));
      this.loadProductsDestinationDirect(this.DestinationOrder);
  
     }
    //   if(this.data.DestinationId>0)
    //  {
    //   this.loadProductsDestinationDirect(this.data.DestinationId);

    //  }
      debugger;
    });
  }

  loadProductsDestination_(value)
  {
    debugger
    this.DestinationOrder = value.value;
    if(!this.DestinationOrder) this.DestinationOrder=0

    // this.productsVm[0].Id=10;
    this._productService.GetDistinationPrice(value.value).subscribe((res) => {
      debugger
      this.destinationPriec = res.DestinationPricesList as DestinationPriceModel[];
    //  this.total = res.TotalItems;
    this.destinationPriec.forEach((element,index) => {
      this.productsVm[index].Id=element.FK_ProductId;
      this.productsVm[index].Price=element.PricePerTon

    });
    // this.productsVm[1].Id=this.destinationPriec[1].FK_ProductId;
    // this.productsVm[1].Price=this.destinationPriec[1].PricePerTon;

      debugger;
    });
    
    // this.productsVm[0].Price=10;
    // this.productsVm[1].Price=20;
  
    // this.productsVm[2].Price=90;
  
  }
  loadProductsDestinationDirect(value)
  {
    debugger
    
    this.DestinationOrder = value;
    if(!this.DestinationOrder) this.DestinationOrder=0

    // this.productsVm[0].Id=10;
    this._productService.GetDistinationPrice(value ).subscribe((res) => {
      debugger
      this.destinationPriec = res.DestinationPricesList as DestinationPriceModel[];
    //  this.total = res.TotalItems;
    this.destinationPriec.forEach((element,index) => {
      this.productsVm[index].Id=element.FK_ProductId;
      this.productsVm[index].Price=element.PricePerTon

    });
    
    }); 
  }
    ngOnInit() {
    debugger
    this.loadProductsDestination(0);
    
   // this.loadProducts(this.p);
  }

  checkContacts(qty) {
    debugger
    if(!this.DestinationOrder) this.DestinationOrder=this.data.DestinationId;

    if (!this.ContactOrder|| !this.MobileOrder || !this.DestinationOrder ||!qty) 
    {
      Swal.fire({
        title: '',
        text: this.translate.instant('message.enterRequiredFaileds'),
        icon: 'error',
        // showCancelButton: false,
        confirmButtonText: this.translate.instant('general.ok')
      })
      return false;
    }
    else{
      return true;
    }
  }
  updateDest(value) {
    debugger
    this.DestinationOrder = value.value;
    this.loadProducts(1);
    // this._orderService.updateDestination(value.value).subscribe((res) => {
    //   // //this.Total = res.TotalPrice;
    // }, (err) => {

    // });
  }
  // getcqty()
  // {
  //   return 10;
  // }
  emptydata() {
    this.MobileOrder = null;
     this.ContactOrder=null;
     this.Address=null;
//     this.Address=null;



  }
  // addToCart_(ItemId,qty)
  // {
  //   if(qty<=0)
  //   {
  //     Swal.fire({
  //       title: '',
  //       text: this.translate.instant('message.enterRequiredFaileds'),
  //       icon: 'success',
  //       showCancelButton: false,
  //       confirmButtonText: this.translate.instant('general.ok')
  //     })
  //   }
  //   return 0;
  // }
  addToCart(ItemId,qty) {
debugger
    if (this.checkContacts(qty))
    {

    //this.cart=new AddToCartModel();

    //ContactOrder: this.ContactOrder,//this.ContactOrder.nativeElement.value;
      // this.cart.CityId= this.DestinationOrder,
      // this.cart.MobileOrder= this.MobileOrder,
      // this.cart.ProductId= ItemId,
      // this.cart.Address=this.Address,
      // this.cart.QTY= qty;
      //Check Qty
      debugger
      if(qty<5)
      {
        Swal.fire({
          title: '',
          text: this.translate.instant('message.QtyLimit'),
          icon: 'error',
          showCancelButton: false,
          confirmButtonText: this.translate.instant('general.ok')
        })
        return false;
      }
      debugger
      this.cart = {
        ContactOrder:this.ContactOrder.toString(),//this.ContactOrder.nativeElement.value;
        CityId: this.DestinationOrder,
        MobileOrder: this.MobileOrder,
        ProductId: ItemId,
        Address:this.Address,
        QTY: qty
      };
      localStorage.setItem('AddressOrder', this.Address);
      localStorage.setItem('MobileOrder', this.MobileOrder.toString());
      localStorage.setItem('ContactOrder', this.ContactOrder.toString());
      localStorage.setItem('DestinationOrder', this.DestinationOrder.toString());

    this._orderService.addToCart(this.cart).subscribe((res) => {
      Swal.fire({
        title: '',
        text: res.Message,
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: this.translate.instant('general.ok')
      }).then((result) => {
        this._notificatoinService.UpdateNotificatoinCount(res.CartItemCount);
        this.router.navigateByUrl("/shopping");
      });
    });
  }
  }

  GetProductImages(productId)
  {

  }
}
