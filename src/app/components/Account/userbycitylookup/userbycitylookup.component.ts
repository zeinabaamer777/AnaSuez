import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserModel } from 'src/app/models/UserModel';
import { TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/config/language';

@Component({
  selector: 'userbycitylookup',
  templateUrl: './userbycitylookup.component.html',
  styleUrls: ['./userbycitylookup.component.css']
})
export class UserbycitylookupComponent implements OnInit {

  userModel:UserModel[];
  index:number
  nrSelect:number
  @Input() cityId:number;
  @Input() valueUserId:number;
  @Output() User=new EventEmitter<{userName:string ,Id:number }>();
  

  constructor( private _serviceGetUsers:AuthService ,private translate: TranslateService,private lang:Language) { }

  ngOnInit() {
    debugger
    this.ServiceGetUsersByCities(this.cityId)
    
    this.nrSelect=this.valueUserId
  }
  getUser(event)
  {
    debugger;
    this.index=event.target.selectedIndex-1;
    this.User.emit({userName:this.userModel[this.index].Username ,Id:this.userModel[this.index].Id });
  }
  //Get User List 
  ServiceGetUsersByCities(cityId)
  {
    debugger ;
    this._serviceGetUsers.GetUsersByCities(cityId).subscribe((res)=>{
      this.userModel=res.Users;
    })
  }
}

