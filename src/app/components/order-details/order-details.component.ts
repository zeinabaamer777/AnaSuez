import { Component, OnInit, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { OrderItemsModel } from 'src/app/models/OrderItemsModel';
import { OrderService } from 'src/app/services/order.service';
import { ActivatedRoute } from '@angular/router';
import { Language } from 'src/app/config/language';
import { PLantModel } from 'src/app/models/PlantModel';
import { PlantService } from 'src/app/services/plant.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import { OrderStatusService } from 'src/app/services/order-status-service.service';
import { OrderStatusModel } from 'src/app/models/OrderStatusModel';
import { orderItems } from 'src/app/models/OrderFawryPayModel';
import { UserbycitylookupComponent } from '../Account/userbycitylookup/userbycitylookup.component';
import { AuthService } from 'src/app/services/auth.service';
import { UserModel } from 'src/app/models/UserModel';
//import {  } from 'protractor';
 

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  plants: PLantModel[];
  items:OrderItemsModel[];
  OrderFormSap:FormGroup;
  orderStatus:OrderStatusModel[];
  cutomerId:string='';
  thisOrderId:number;
  cityId:number;
  ordertypeValue:string;
  ordertype:string;
  ordertypeEmit:string='';
  DestinationId:number;
  TypeTrader:number;
  ordertypeEmitValues:string;
  ordertypeEmitIndex:string
  orderStatusValue:string

  lUserRoleName=localStorage.getItem("UserRoleName")
  @Output() user=new  EventEmitter<{userName:string ,Id:number }>();
  @ViewChild("userbycitylookup",null) userbycitylookupcomponent: UserbycitylookupComponent;
  userModel:UserModel[];

  constructor(private _orderService: OrderService,private formbuilder:FormBuilder,
    private route: ActivatedRoute,private lang: Language, private router:Router ,private translate: TranslateService,
    private _plantService: PlantService, private orderService:OrderService
    ,private OrderStatusService:OrderStatusService,
    private _serviceGetUsers:AuthService,
    private elRef:ElementRef) { }
    
    saveOrderSap()
    {
      debugger
      this.OrderFormSap.value;
      if(this.OrderFormSap.value)
      this.orderService.SubmitOrderToSab(this.OrderFormSap.value).subscribe((res)=>{
        Swal.fire("Done",this.translate.instant('message.userCreated') , "success");
        // .then((value) => {
        //   this.router.navigateByUrl('/login');
        // });
      })
    }

  
  ngOnInit() {
    debugger
    this.route.params.subscribe(params => {
      if (params["id"]) 
      {
        this.thisOrderId=params["id"];
        debugger 
        this._orderService.getOrderDetails(params["id"]).subscribe((res) => {
         this.items=res.OrdersItems as OrderItemsModel[];
         debugger
          this.ordertype=res.deliverWayId//res.OrdersItems[0].Order.Type;
          this.orderStatusValue=res.OrdersItems[0].Order.FK_StatusId;//In order active Submit when customer pay
          if(this.ordertype=="1"  )
          { 
            this.ordertypeValue="Plant";
     this.cutomerId='';

 
          }
          else if(this.ordertype=="2")
          { 
            this.ordertypeValue="Trader";
 
          }

        });
      }

    });
    
    this._plantService.loadPlants().subscribe((res) => {
      this.plants = res.Plants as PLantModel[];
    });

   
    
    //Get Order Status
    this.OrderStatusService.GetStatusOrder().subscribe((res)=>{
      this.orderStatus=res.OrderStatuses
    });
  this.OrderFormSap=this.formbuilder.group({
    OrderId :[71],
    PlantId :[''],
    loadingPeople :['0003000030'],
    OrderStatusId:['']
   })
  }
  saveOrderItem(item)
  {
    debugger
    // if(this.ordertypeEmitValues !='')
    // type=this.ordertypeEmitValues;
    if(this.cutomerId=='')
    this.cutomerId='0';
   //this.DestinationId
   //this.cutomerId
   if(item.traderId==null)
   item.traderId=0;
   this._orderService.UpdateOrderItems(item.Id,item.deliverWayId,item.traderId).subscribe((res) => {
     
     // this.items=res;
      if(res.StatusCode=="400")
      {
          Swal.fire("Error",res.Message ,"error");
      }
      else
      {
         this.items=res.OrdersItemsObject;

        Swal.fire("Done",this.translate.instant('messages.Add') ,"success");

      }
     });
  }
  getuser(event,item)
  {
    debugger
    this.cutomerId=event.Id
    item.traderId=event.Id;
  }
  GetOrderType(event,item)
  {
    
    this.ordertypeEmit=event.Id;//.toString()+id.toString();

   // var div = this.elRef.nativeElement.querySelector('#elm');
    var div2= document.getElementById('r_'+item.Id);
   // var divsub2= document.getElementById('d_'+item.Id);
   item.deliverWayId=event.Id;
    debugger;
  //  var val=divsub2.options[divsub2.selectedIndex].value
  if( this.ordertypeEmit=='1')
  {
    div2.style.display ="none"
  }
  else
  {
    div2.style.display ="block"

  }
  
    //debugger
    this.ordertypeEmitValues=event.Id;
   
    



   // this.ordertypeEmitIndex=this.ordertypeEmit+id;
    //1=Plant
    //2=Trader

    // if(this.DestinationId)//this.ordertypeEmit=="1"+id.toString()) dive
    // {
    //   this.ServiceGetUsersByCities(this.DestinationId)
    // }
  }
  fillUsersByCities(cityId){
    this.cityId=cityId;
    debugger
    this.userbycitylookupcomponent.ServiceGetUsersByCities(cityId);
  }
  getCity(event)
  {
    debugger
    this.DestinationId=event.Id
     this. ServiceGetUsersByCities(this.DestinationId)

//    this.fillUsersByCities(this.DestinationId);
  }

  ServiceGetUsersByCities(cityId)
  {
    debugger ;
    this._serviceGetUsers.GetUsersByCities(cityId).subscribe((res)=>{
      this.userModel=res.Users;
    })
  }


  Save(id,approve)
  {
    debugger;
      this._orderService
      .TraderApprovePerOrderItem(id,approve)
      .subscribe((res)=>{
        Swal.fire({
          title: '',
          text: this.translate.instant('messages.Add'),
          icon: 'success',
          showCancelButton: false,
          confirmButtonText: this.translate.instant('general.ok')      
       
        });
      })
      //event.target.disabled = true;
     // this.Approve=false;
      //this.ApproveResult=approve;
  }
}