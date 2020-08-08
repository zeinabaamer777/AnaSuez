import { Injectable } from '@angular/core';
import { Api } from '../provider/Api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaticListsService {

  constructor(public api: Api) { }

  public loadIncoTerms(): Observable<any> {
    return this.api.get("StaticLists/GetIncoTerms");
  }


  public loadReserModes(): Observable<any> {
    return this.api.get("StaticLists/ResetMethods");
  }

  public DeliverWayMethods(): Observable<any> {
    return this.api.get("StaticLists/DeliverWayMethods");
  }
  public GetUserBalance(CompanyCode): Observable<any> {
    return this.api.get("StaticLists/GetUserBalance?CompanyCode="+CompanyCode);
  }
}
