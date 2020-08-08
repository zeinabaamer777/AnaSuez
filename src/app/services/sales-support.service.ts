import { Injectable } from '@angular/core';
import { Api } from '../provider/Api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesSupportService {

  constructor(public api:Api) { }

  public GetAllOrder(PageNumber): Observable<any> {
      return this.api.get("Order/GetAllOrder?pageNumber="+PageNumber);
  }
}
