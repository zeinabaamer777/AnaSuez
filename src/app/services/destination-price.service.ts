import { Injectable } from '@angular/core';
import { Api } from '../provider/Api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinationPriceService {
  //[(ngModel)]="name"
  destinationId:string;
  productId:string;
   price:number;
  constructor(public api:Api) 
  {}
  //public Add(DestinationPriceModel: any )

  public Add(DestinationPriceMode): Observable<any> {
    return this.api.post("DestinationPrices/Add", DestinationPriceMode);
  }
  public GetDestinationPrice(destinationId,productId): Observable<any> {
    return this.api.get("DestinationPrices/GetDestinationPrice?destinationId="+destinationId+"&productId="+productId);
  }
  
}
