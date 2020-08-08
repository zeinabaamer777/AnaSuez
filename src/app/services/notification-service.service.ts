import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Api } from '../provider/Api';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {
  private subject = new Subject<any>();
  constructor(public api: Api) { }

  getCartCount(): Observable<any> {
    return this.subject.asObservable();
  }
  public UpdateNotificatoinCount(cartcount) {
    this.subject.next({ cnt: cartcount });
  }
}
