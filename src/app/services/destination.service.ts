import { Injectable } from '@angular/core';
import { Api } from '../provider/Api';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  constructor(public api: Api) { }

  public getDestinations(): Observable<any> {
    return this.api.get("Destination/GetDestinations");
  }
  
}
