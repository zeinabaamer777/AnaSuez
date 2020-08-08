import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from 'src/app/models/ProductModel';
import { Language } from 'src/app/config/language';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
loadPriceListTab:boolean;
  products: ProductModel[];
 //uploader:FileUploader;
  hasBaseDropZoneOver:boolean;
  hasAnotherDropZoneOver:boolean;
  response:string;
  constructor(private translate: TranslateService,
    private _productService: ProductService, private lang: Language) { }

  Activate(id) {
    this.products.filter(x=>x.Id==id)[0].IsActive=true;
    this._productService.ChangeActivity(id,true).subscribe((res)=>{
      Swal.fire({
        title: '',
        text: res.Message,
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: this.translate.instant('general.ok')      
     
      });
    });
  }
  Deactivate(id) {
    this.products.filter(x=>x.Id==id)[0].IsActive=false;
    this._productService.ChangeActivity(id,false).subscribe((res)=>{
      Swal.fire({
        title: '',
        text: res.Message,
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: this.translate.instant('general.ok')      
     
      });
    });
  }
  ngOnInit() {
    this.loadPriceListTab=false;
    this._productService.adminLoadProducts(1).subscribe((res) => {
      this.products = res.Products as ProductModel[];
    });
  }
  GetProducts()
  {
    this._productService.adminLoadProducts(1).subscribe((res) => {
      this.products = res.Products as ProductModel[];
    return this.products

    });
    return this.products
  }
  PrepareAddProductPricesList()
  {
    this.loadPriceListTab=true;
  }
   
}
