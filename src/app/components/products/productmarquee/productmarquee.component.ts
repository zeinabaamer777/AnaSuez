import { Component, OnInit } from '@angular/core';
import { NotificationServiceService } from 'src/app/services/notification-service.service';
import { TranslateService } from '@ngx-translate/core';
import { OrderService } from 'src/app/services/order.service';
import { Language } from 'src/app/config/language';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { ProductModel, ProductVmModel } from 'src/app/models/ProductModel';
import { UPLOAD_URL } from 'src/app/config/globals';

@Component({
  selector: 'productmarquee',
  templateUrl: './productmarquee.component.html',
  styleUrls: ['./productmarquee.component.css']
})
export class ProductmarqueeComponent implements OnInit {
  products: ProductModel[];
  productsVm:ProductVmModel[];
  img_url: string = UPLOAD_URL;

  constructor(private _notificatoinService: NotificationServiceService, private router: Router, 
    private translate: TranslateService, private _productService: ProductService, 
    private lang: Language, private _orderService: OrderService) { }

  ngOnInit() {
    this.loadProducts();
  }
  loadProducts() {
    debugger
    this._productService.loadProductsDestination(1, 1).subscribe((res) => {
      debugger
      this.productsVm = res.Products as ProductVmModel[];
      //this.total = res.TotalItems;
      debugger;
    });
  }
}
