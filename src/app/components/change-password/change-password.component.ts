import { Component, OnInit } from '@angular/core';
import { ChangePasswordModel } from 'src/app/models/ChangePasswordModel';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  model: ChangePasswordModel=new ChangePasswordModel();
  constructor(private _autService: AuthService,private router: Router,private translate: TranslateService) { }

  changePassword() {
    
    if(this.model.Password!=this.model.PasswordConf)
    {
      //error password not matched
      Swal.fire({
        text: this.translate.instant('message.passwordNotMatch'),
        icon: 'error',
        showCancelButton: false,
        confirmButtonText: this.translate.instant('general.ok')
      });
    }
    else{
      this._autService.ChangePassword(this.model.Password,this.model.Code).subscribe((res)=>{
        //redirect to login aftershow success message
        Swal.fire({
          text: res.Message,
          icon: 'success',
          showCancelButton: false,
          confirmButtonText: this.translate.instant('general.ok')
        }).then()
        {
          this.router.navigateByUrl('/login');
        };
       
      });
    
    }
  }
  ngOnInit() {
  }

}
