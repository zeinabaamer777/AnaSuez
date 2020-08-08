import { Injectable } from '@angular/core';
import { Api } from '../provider/Api';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public api: Api) { }

  public loadCartItems(): Observable<any> {
    return this.api.get("Cart/getCart");
  }

  public payment(): Observable<any> {
    return this.api.get("index");
  }

  public GetCartCount(): Observable<any> {
    return this.api.get("Order/GetCartCount");
  }
  
 

}
