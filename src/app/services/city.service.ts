import { Injectable } from '@angular/core';
import { Api } from '../provider/Api';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(public api: Api) { }

  public loadCities(): Observable<any> {
    return this.api.get("city/GetCities");
  }
  public CityOnOrder(orderId): Observable<any> {
    debugger
    return this.api.get("city/CityOnOrder?orderId="+orderId);
  }

  
 // CityOnOrder
}
