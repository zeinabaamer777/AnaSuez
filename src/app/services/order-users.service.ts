import { Injectable } from '@angular/core';
import { Api } from '../provider/Api';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OrderUsersService {
 
  constructor(public api: Api) { }

  public Add(OrderUser): Observable<any> {
    return this.api.post("OrderUsers/Add",OrderUser);
  }
  public GetAll(): Observable<any> {
    return this.api.get("OrderUsers/GetAll");
  }
  public Approve(orderId,approve): Observable<any> {
    return this.api.get("OrderUsers/Approve?orderId="+orderId+"&approve="+approve);
  }
  public GetOrderItemsStatus(orderId): Observable<any> {
    return this.api.get("OrderUsers/GetOrderItemsStatus?orderId="+orderId);
  }

 // return this.api.get("Order/UpdateItem?ItemId="+ItemId+"&qty="+qty);
  //
}
