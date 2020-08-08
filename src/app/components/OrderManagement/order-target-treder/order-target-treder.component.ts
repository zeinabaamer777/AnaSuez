import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { OrderUsersService } from 'src/app/services/order-users.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/config/language';
import Swal from 'sweetalert2';
import { UserbycitylookupComponent } from '../../Account/userbycitylookup/userbycitylookup.component';
import { debug } from 'util';
// /https://stackoverflow.com/questions/37587732/how-to-call-another-components-function-in-angular2
@Component({
  selector: 'order-target-treder',
  templateUrl: './order-target-treder.component.html',
  styleUrls: ['./order-target-treder.component.css']
})
export class OrderTargetTrederComponent implements OnInit {
  cutomerId:number;
  DestinationId:number;
  City:number;
  @Input() orderId:number;
  @ViewChild("userbycitylookup",null) userbycitylookupcomponent: UserbycitylookupComponent;

  AddFrom:FormGroup;
  constructor(private _orderUsersService:OrderUsersService
    ,private translate: TranslateService,private lang:Language,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
   // this.orderId=10090;
    this.AddFrom=this.formBuilder.group({
      Id:[''],
      OrderId:[''],
      DestinationId:[''],
      UserId:['']
    })
  }
  fillUsersByCities(cityId){
    debugger
    this.userbycitylookupcomponent.ServiceGetUsersByCities(cityId);
  }
  Add(form)
  {
    this.AddFrom.value.UserId=this.cutomerId;
    this.AddFrom.value.OrderId=this.orderId;//this.cutomerId;
    this.AddFrom.value.DestinationId=this.DestinationId//this.cutomerId;
    //this.AddFrom.value.CityId=this.cutomerId;
debugger
    if (this.AddFrom.valid) {

      this._orderUsersService.Add(this.AddFrom.value).subscribe((res) => {
        Swal.fire({
          text: res.Message,
          icon: 'success',
          showCancelButton: false,
          confirmButtonText: this.translate.instant('general.ok')
        })

        // Swal.fire({
        //   title: '',
        //   text: res.Message,
        //   icon: 'success',
        //   showCancelButton: false,
        //   confirmButtonText: this.translate.instant('general.ok')


        .then((value) => {
         // this.router.navigateByUrl('/login');
        });
      });
    }
  }
  getUser(event)
  {
    debugger
    this.cutomerId=event.Id
  }
  getCity(event)
  {
    debugger
    this.DestinationId=event.Id
    this.fillUsersByCities(this.DestinationId);
  }

}
