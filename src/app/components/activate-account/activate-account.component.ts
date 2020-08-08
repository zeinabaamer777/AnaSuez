import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent implements OnInit {

  constructor(private _authService:AuthService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {

      if (params["ActivationCode"])
      {
        this._authService.ActivateAccount(params["ActivationCode"]).subscribe((res)=>{
          Swal.fire("", res.Message , 'success')
          this.router.navigateByUrl('/login')

          .then((value) => {
            this.router.navigateByUrl('/login');

          });
        });
      }
    });
      
  }

}
