import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { LookupModel } from 'src/app/models/LookupModel';
import { ProductModel } from 'src/app/models/ProductModel';

@Component({
  selector: 'get-product-lookup',
  templateUrl: './get-product-lookup.component.html',
  styleUrls: ['./get-product-lookup.component.css']
})
export class GetProductLookupComponent implements OnInit {
  lookupModel :LookupModel[];
  lookupproductModel :LookupModel[];

  productModel:ProductModel[];
  
  index:number;
  @Output() getProductID =new EventEmitter<{value : number }>();

  constructor(private _serviceProduce:ProductService) { }

  ngOnInit() {
    debugger
    this.ServiceGetProductLookup();
  }
  selectedValue(event)
  {
    debugger
    this.index=event.target.selectedIndex-1;

     this.getProductID.emit({value:this.productModel[this.index].Id});
  }
 //Get User List 
 ServiceGetProductLookup()
 {
   debugger ;
   this._serviceProduce.GetProductLookup().subscribe((res)=>{
     debugger ;
     this.productModel =res.Products;

    //  /lookupproductModel
   })
 }
}
