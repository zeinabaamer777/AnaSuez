import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/ProductModel';
import { TranslateService } from '@ngx-translate/core';
import { ProductService } from 'src/app/services/product.service';
import { Language } from 'src/app/config/language';

@Component({
  selector: 'productstab',
  templateUrl: './productstab.component.html',
  styleUrls: ['./productstab.component.css']
})
export class ProductstabComponent implements OnInit {

  products: ProductModel[];

  constructor(private translate: TranslateService,
    private _productService: ProductService, private lang: Language) { }

  ngOnInit() {
    this._productService.adminLoadProducts(1).subscribe((res) => {
    this.products = res.Products as ProductModel[];
  });
 }
}