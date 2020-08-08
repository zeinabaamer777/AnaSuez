import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { AuthService } from 'src/app/services/auth.service';
import { LoginModel } from 'src/app/models/LoginModel';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'src/app/services/cookie.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user_cred: LoginModel;
  constructor( private route: ActivatedRoute,private _authService: AuthService, private router: Router, private cookies: CookieService) { }
  ret_url:string="";
  red:string=localStorage.getItem("redirect");
  login() {
    this.route.params.subscribe(params => {
      if (params["url"]) {
        debugger;
       this.ret_url=params["url"];
      }

    });
    this._authService.Login(this.user_cred).subscribe((res) => {
      //localStorage.setItem('Authorization', res.Token);
      debugger
      localStorage.setItem('UserRoleName', res.UserRoleName);
      localStorage.setItem('Email', res.Email);
      localStorage.setItem('Mobile', res.Phone);
      localStorage.setItem('UserName', res.Username);


      //this.cookies.setCookie("ClientType",res.)
      this.cookies.setCookie("usr", res.UserRoleName, 1);
      this.cookies.setCookie("SCEPAuthorization", res.Token, 1);
      debugger;
      if(this.red &&this.red!="/login" )
      {
        debugger;
        //this.router.navigateByUrl(this.red);
        this.router.navigateByUrl('/shopping');

      }
      else
      {
        debugger;
        this.router.navigateByUrl('/shopping');
      }
     

    });
    //Swal.fire('Error', 'error', 'error')
    //localStorage.setItem('Authorization','');
  }
  ngOnInit() {
    

    this.user_cred = new LoginModel();
  }

}
