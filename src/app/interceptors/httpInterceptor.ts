import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import Swal from 'sweetalert2';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from '../services/cookie.service';
@Injectable()
export class httpInterceptor implements HttpInterceptor {
  constructor(private router: Router, private translate: TranslateService, private cookies: CookieService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let headers: HttpHeaders = new HttpHeaders();
debugger
    var token = this.cookies.getCookie("SCEPAuthorization");
    var UserType = localStorage.getItem("UserRoleName");

    // var token = localStorage.getItem('Authorization');
    if (token) {
      headers = headers.append('Authorization', token);
    }
    headers=headers.append('Content-Type','application/json');
    var ccult = localStorage.getItem('culture');
    if (ccult == null || ccult == '') {
      ccult = 'en-US';
    }
    headers = headers.append('culture', ccult);

    const authReq = req.clone({
      headers: headers
    });

    // 'Authorization': 'my-auth-token'
    return next.handle(authReq).pipe(
      
      catchError((error) => {
        let url_='';
        let errorMessage = '';
        debugger
        url_=error.url;
        if (error.status === 403) {

        } else if (error.status === 400) {

        }
        else if (error.status === 401) {
          debugger
          this.cookies.setCookie("SCEPAuthorization", "", 1);
          localStorage.removeItem("Authorization");   
          localStorage.removeItem("UserRoleName")
          localStorage.setItem("UserRoleName",null)

          localStorage.clear();
          //http://localhost:44329//
          // if(url_=='https://mysuez.suezcem.com/AnaSuezBackend/api/Order/GetUserOrder' || 
          // url_=='https://mysuez.suezcem.com/AnaSuezBackend/api/Order/GetCartItems' ||
          // url_=='https://mysuez.suezcem.com/#/my-orders')
          // if(url_=="http://localhost:44329//api/Order/GetUserOrder"|| 
          // url_=="http://localhost:44329//api/Order/GetCartItems" )
          
          // {
            Swal.fire({
              title: '',
              text: this.translate.instant('message.Login'),
              icon: 'error',
              showCancelButton: false,
              confirmButtonText: this.translate.instant('general.ok')
            }).then((result) => {
              this.router.navigateByUrl('/shopping/'+window.location.pathname);
  
            });

          // }
          // else
          // {
          //   this.router.navigateByUrl('/login/'+window.location.pathname);
          //   localStorage.setItem("redirect",window.location.pathname);
          // }
          
        }
        else if (error.status === 500) {

          Swal.fire({
            title: '',
            text: error.error.Error,
            icon: 'error',
            showCancelButton: false,
            confirmButtonText: this.translate.instant('general.ok')
          }).then((result) => {

          });

        }
        return throwError(errorMessage);
      })

    );
  }


}