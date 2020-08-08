import { Injectable } from '@angular/core';
import { Api } from '../provider/Api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagmenttransportationService {



  constructor(public api: Api) { }

  public Add(OrderUser): Observable<any> {
    return this.api.post("OrderUsers/Add",OrderUser);
  }
  public getCoupons(PageNumber,company,plant,packaging,deliveryType,from,to,inco): Observable<any> {
    return this.api.get("Reports/Coupon?PageNumber="+PageNumber+"&company="+company+"&plant="+plant+"&packaging="+packaging+"&deliveryType="+deliveryType+"&from="+from+"&to="+to+"&inco="+inco);
   
  }
  public SaveTrucks(model): Observable<any> {
    return this.api.post("Reports/SaveTrucks",model);
  }
  public SaveDriver(model): Observable<any> {
    return this.api.post("Reports/SaveDriver",model);
  }
  // public saveProduct(product,file): Observable<any> {
  //   return this.api.post("Product/SaveProduct",{ Product:product,file:file});
  // }
  
}
