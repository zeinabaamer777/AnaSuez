import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from 'src/app/components/products/products.component';
import { ProductModel } from 'src/app/models/ProductModel';
import { ProductService } from 'src/app/services/product.service';
import { TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/config/language';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-layout',
  templateUrl: './shopping-layout.component.html',
  styleUrls: ['./shopping-layout.component.css'],
  providers:[ProductsComponent]
})
export class ShoppingLayoutComponent implements OnInit {
//<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  products: ProductModel[];

  constructor(private router: Router) { }

  ngOnInit() {
   
  }
  get isDetails(){
    return this.router.url.indexOf('product-details') >= 0; 
  }

}
