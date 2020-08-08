import { Injectable } from '@angular/core';
import { Api } from '../provider/Api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplainsService {

  constructor(public api: Api) { }

  public Add(Complains,file): Observable<any> {
    return this.api.post("Complain/Add",{Complains:Complains,file:file});
  }
}
