import { Injectable } from '@angular/core';
import { Api } from '../provider/Api';
import { Observable } from 'rxjs';
import { debug } from 'util';
import { data } from 'jquery';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  datefrom:Date;
  dateTo:Date;
  today= new Date();

  constructor(public api: Api) { }

  public calculateOrder(): Observable<any> {
    return this.api.get("Order/CalculateOrder");
  }

  public changeQTY(ItemId,qty): Observable<any> {
    return this.api.get("Order/UpdateItem?ItemId="+ItemId+"&qty="+qty);
  }
  public updateDestination(DestId): Observable<any> {
    return this.api.get("Order/UpdateDestination?DestId="+DestId);
  }
  public SubmitOrderToSab(SAPOrder): Observable<any> {
    return this.api.post("Order/SubmitOrderToSab",SAPOrder);
  }
  
  public GetAllOrder(event): Observable<any> {
    
    return this.api.get("Order/GetAllOrderFilter?statusId="+event.Id+"&dateFrom="+formatDate(event.DateFrom, 'yyyy/MM/dd 00:00:00',"en")+"&dateTo="+formatDate(event.DateTo, 'yyyy/MM/dd 23:59:59',"en"));

  //  return this.api.get("Order/GetAllOrder?statusId="+statusId);
  }
  public GetAllOrderFilterByUser(event): Observable<any> {
    this.datefrom=event.DateFrom;
    this.dateTo=event.DateTo;

    return this.api.get("Order/GetAllOrderFilterByUser?statusId="+event.Id+"&dateFrom="+formatDate(this.datefrom, 'yyyy/MM/dd 00:00:00',"en")+"&dateTo="+formatDate(this.dateTo, 'yyyy/MM/dd 23:59:59',"en"));

  //  return this.api.get("Order/GetAllOrder?statusId="+statusId);
  }
  public GetAllOrderFilterByUserParameter(status,PageNumber): Observable<any> {
    return this.api.get("Order/GetAllOrderFilterByUserParameter?statusId="+status+"&pageNumber="+PageNumber);

  //  return this.api.get("Order/GetAllOrder?statusId="+statusId);
  }
  //
  public GetAllOrder_(event): Observable<any> {
    debugger
    this.datefrom=event.DateFrom;
    this.dateTo=event.DateTo;

    return this.api.get("Order/GetAllOrderFilter?statusId="+event.Id+"&dateFrom="+formatDate(this.datefrom, 'yyyy/MM/dd 00:00:00',"en")+"&dateTo="+formatDate(this.dateTo, 'yyyy/MM/dd 00:00:00',"en"));
  }
  public getMyOrders(): Observable<any> {
    return this.api.get("Order/GetUserOrder");
  }
  public GetShippedCompleteOrder(): Observable<any> {
    return this.api.get("Order/GetShippedCompleteOrder");
  }
  public GetPaiedPlantOrder(PageNumber): Observable<any> {
    return this.api.get("Order/GetPayedPlantOrder?pageNumber="+PageNumber);
  }
  
  
  public CloseOrder(OrderId): Observable<any> {
    return this.api.get("Order/CloseOrder?OrderId="+OrderId);
  } 
  public CloseTraderOrder(OrderId): Observable<any> {
    return this.api.get("OrderUsers/CloseTraderOrder?OrderId="+OrderId);
  } 
  
  public getOrderDetails(OrderId): Observable<any> {
    return this.api.get("Order/GetUserOrderDetails?OrderId="+OrderId);
  }
  public getOrderItemsDetails(OrderId): Observable<any> {
    return this.api.get("Order/GetUserOrderItemsDetails?OrderId="+OrderId);
  }
  public addToCart(cartmodel): Observable<any> {
    return this.api.post("Order/AddToCart",JSON.stringify(cartmodel));
  }
  public GetGetShippedCompleteOrderTrader(): Observable<any> {
    return this.api.get("OrderUsers/GetGetShippedCompleteOrderTrader");
  }
  
//UpdateTypeOrder
public UpdateTypeOrder(OrderId): Observable<any> {
  return this.api.get("Order/UpdateTypeOrder?orderId="+OrderId);
}

  public UpdateTypeOrderBySalesTeam(OrderId): Observable<any> {
    return this.api.get("Order/UpdateTypeOrderBySalesTeam?orderId="+OrderId);
  }

  public GetCartItems(): Observable<any> {
    return this.api.get("Order/GetCartItems");
  }

  public RemoveFromCart(itemId): Observable<any> {
    return this.api.get("Order/RemoveCartItem?ItemId="+itemId);
  }

  public DebositFawry(value): Observable<any> {
    return this.api.get("FawryPayment/DebositFawry?value="+value);
  }

  public FawryPay(): Observable<any> {
    return this.api.get("FawryPayment/FawryPay");
  }
  public FawryPay__(): Observable<any> {
    return this.api.get("FawryPayment/X");
  }
  public UpdateOrderItems(Id,Type,TraderID): Observable<any> {
    return this.api.get("Order/UpdateOrderItems?Id="+Id+"&Type="+Type+"&TraderId="+TraderID);
  }
  public TraderApprovePerOrderItem(detailId,Approve): Observable<any> {
    return this.api.get("Order/TraderApprovePerOrderItem?detailId="+detailId+"&approve="+Approve);
  } 
}
