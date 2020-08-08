import { Component, OnInit } from '@angular/core';
import { PAYMENT_URL } from 'src/app/config/globals';

import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-deposite-rcusomer',
  templateUrl: './deposite-rcusomer.component.html',
  styleUrls: ['./deposite-rcusomer.component.css']
})
export class DepositeRCusomerComponent implements OnInit {
value:number;
  constructor(private translate: TranslateService,private router: Router) { }
  pay() {
    window.location.href = PAYMENT_URL + "/Index";

    // this._cartService.payment(this.Total,"380786575823").subscribe
  }

  DepositeVisa() {
    debugger
    window.location.href = PAYMENT_URL + "/IndexVisaDebosite?value="+this.value;

    // this._cartService.payment(this.Total,"380786575823").subscribe
  }
  DebositFawry() {

    Swal.fire({
      title: '',
      text: this.translate.instant('message.fawrypay'),
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: this.translate.instant('general.cancel'),
      confirmButtonText: this.translate.instant('general.ok')
    })
    .then((result) => {
      debugger
      if (result.value) {
        this.router.navigateByUrl('/fawrypay');
      
      }

    });

   
  }
  ngOnInit() {
  }

}
