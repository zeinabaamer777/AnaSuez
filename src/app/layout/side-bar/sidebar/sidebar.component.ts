import { Component, OnInit } from '@angular/core';
import { ProductTypeService } from 'src/app/services/product-type.service';
import { ProductTypeModel } from 'src/app/models/ProductTypeModel';
import { Language } from 'src/app/config/language';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  types:ProductTypeModel[];
  constructor(private _typesService:ProductTypeService,private lang:Language) { }

  ngOnInit() {
    this._typesService.loadProductTypes().subscribe((res)=>{
      this.types=res.ProductTypes as ProductTypeModel[];
      debugger;
    });
  }

}
