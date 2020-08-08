import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/config/language';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from 'src/app/models/ProductModel';
import { ActivatedRoute, Router } from '@angular/router';
import { UPLOAD_URL } from 'src/app/config/globals';
import { NotificationServiceService } from 'src/app/services/notification-service.service';
import { OrderService } from 'src/app/services/order.service';
import { AddToCartModel } from 'src/app/models/AddToCartModel';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
import { ProductImagesesModelModule } from 'src/app/models/product-imageses-model/product-imageses-model.module';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:ProductModel;
  img_url: string = UPLOAD_URL;
  cart: AddToCartModel;
  ProductImageses:ProductImagesesModelModule[]
  constructor(private translate: TranslateService,
    private _orderService: OrderService,
    private _notificatoinService: NotificationServiceService,
    private _productService:ProductService,
    private lang:Language, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      this._productService.productDetails(params["id"]).subscribe((res) => {    
        this.product = res.Product as ProductModel;
      });
      debugger
      this._productService.GetProductImages(params["id"]).subscribe((res) => {    
        this.ProductImageses = res.ProductImageses as ProductImagesesModelModule[];
      });
    });
  }

  addToCart(ItemId) {
    this.cart=new AddToCartModel();
    this.cart.ProductId = ItemId;
    //this.cart.QTY = 5;
    debugger;
    this._orderService.addToCart(this.cart).subscribe((res) => {
      Swal.fire({
        title: '',
        text: res.Message,
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: this.translate.instant('general.ok')
      }).then((result) => {
        this._notificatoinService.UpdateNotificatoinCount(res.CartItemCount);
        
      });
    });
  }
  BackToMainPage()
  {
    this.router.navigateByUrl('/');
  }

  
}
