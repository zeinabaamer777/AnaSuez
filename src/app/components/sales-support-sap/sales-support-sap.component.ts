import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/config/language';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { CityModel } from 'src/app/models/CityModel';
import { CityService } from 'src/app/services/city.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { OrderModel } from 'src/app/models/OrderModel';
import { SalesSupportService } from 'src/app/services/sales-support.service';
import { OrderService } from 'src/app/services/order.service';
// import { OrderStatusServiceService } from 'src/app/services/order-status-service.service';
import { OrderStatusModel } from 'src/app/models/OrderStatusModel';

@Component({
  selector: 'app-sales-support-sap',
  templateUrl: './sales-support-sap.component.html',
  styleUrls: ['./sales-support-sap.component.css']
})
export class SalesSupportSapComponent implements OnInit { 
  registerFormSap:FormGroup;
  OrderFormSap:FormGroup;
  cities:CityModel[];
  allOrder:OrderModel[];
  myOrdersPreview:OrderModel[];
  p: number = 1;
  pageSize: number = 20;
  total: number = 0;

  constructor(private translate: TranslateService,private lang:Language,
    private formbuilder:FormBuilder,private cityService:CityService,private authService: AuthService,
    private router:Router ,private salesSupportService:SalesSupportService,
    private orderService:OrderService 
     ) { }

  saveUser()
  {
    this.registerFormSap.value;
    if(this.registerFormSap.valid)
    this.authService.Register(this.registerFormSap.value).subscribe((res)=>
    {
      Swal.fire("Done",this.translate.instant('message.userCreated') , "success")
      .then((value) => {
        this.router.navigateByUrl('/login');
      });
    });
    
  }


  GetOrderByStatus(event)
  {
    //return this.api.get("Order/GetAllOrder?statusId="+statusId);
    //
    debugger
    this.orderService.GetAllOrder(event).subscribe((res)=>{
      debugger;
      this.allOrder=res.Orders as OrderModel[];
      this.total = res.TotalItems;
    });
  }
  saveOrderSap()
  {
    this.OrderFormSap.value;
    if(this.OrderFormSap.value)
    this.orderService.SubmitOrderToSab(this.OrderFormSap.value).subscribe((res)=>{
      Swal.fire("Done",this.translate.instant('message.userCreated') , "success")
      .then((value) => {
        this.router.navigateByUrl('/login');
      });
    })
  }
  ngOnInit() {
  //Get City Lookup
  this.cityService.loadCities().subscribe((res)=>{
   this.cities=res.cities;
   //Get All Order
   this.LoadOrder(this.p)
  });

   this.OrderFormSap=this.formbuilder.group({
    OrderId :[''],
    PlantId :[''],
    loadingPeople :['"0003000030"']
   })
  this.registerFormSap=this.formbuilder.group({
      FirstName:[''],
      LastName:[''],
      Email:[''],
      Password:[''],
      Phone:[''],
      FK_CityId: [null],
      PasswordConf: [''],
      Gender: [''],
      Address: [''],
      PostalCode: [''],
      StreetName: [''],
      StreetNumber: [''],
      Region: [''],
      SapCustomerCode: ['SCC']
    })
  }
  LoadOrder(PageNumber)
  {
    this.p = PageNumber;
    this.salesSupportService.GetAllOrder(this.p).subscribe((res)=>{
      this.allOrder=res.Orders
        this.total = res.TotalItems;
      
      });
  }
}
