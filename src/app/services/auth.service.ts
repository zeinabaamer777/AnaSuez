import { Injectable } from '@angular/core';
import { Api } from '../provider/Api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public api: Api) { }

  public Login(userCred): Observable<any> {
    debugger;
    return this.api.post("account/login", userCred);
  }

  public Register(user): Observable<any> {
    return this.api.post("account/register", user);
  }
  public UpdateUser(user): Observable<any> {
    return this.api.post("account/UpdateUser", user);
  }
  
  public ActivateAccount(AC): Observable<any> {
     return this.api.get("account/ActivateAccount?ActivationCode="+AC);
   }

   public GetUsers(): Observable<any> {
     return this.api.get("account/GetUsers");
   }
   public GetUsersByCities(cityId): Observable<any> {
    return this.api.get("account/GetUsersByCities?cityId="+cityId);
  }
   
  public resetPassword(userInfo,mode): Observable<any> {
    return this.api.get("account/ResetPassword?UserInfo="+userInfo+"&resetMode="+mode);
  }
 
  public ChangePassword(password,code): Observable<any> {
    return this.api.post("account/ChangePassword?Password="+password+"&Code="+code, {});
  }
}

