import { Injectable } from '@angular/core';
import { Api } from '../provider/Api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderStatusService {

  constructor(public api:Api) { }

  public GetStatusOrder():Observable<any>{
    return this.api.get("OrderStatus/GetAllOrderStatus");
  }
}
