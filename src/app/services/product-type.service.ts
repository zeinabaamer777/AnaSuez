import { Injectable } from '@angular/core';
import { Api } from '../provider/Api';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

  constructor(public api: Api) { }
  public loadProductTypes(): Observable<any> {
    return this.api.get("ProductType/GetProductTypes");
  }
}
