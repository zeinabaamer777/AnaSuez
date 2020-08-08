import { Component, OnInit, Output,EventEmitter, DebugElement } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserModel } from 'src/app/models/UserModel';


@Component({
  selector: 'userslookup',
  templateUrl: './userslookup.component.html',
  styleUrls: ['./userslookup.component.css']
})
export class UserslookupComponent implements OnInit {
  userModel:UserModel[];
  index:number
  @Output() User=new EventEmitter<{userName:string ,Id:number }>();
  

  constructor( private _serviceGetUsers:AuthService ) { }

  ngOnInit() {
    this.ServiceGetUsers()
  }
  getUser(event)
  {
    debugger;
    this.index=event.target.selectedIndex-1;
    this.User.emit({userName:this.userModel[this.index].Username ,Id:this.userModel[this.index].Id });
  }
  //Get User List 
  ServiceGetUsers()
  {
    debugger ;
    this._serviceGetUsers.GetUsers().subscribe((res)=>{
      this.userModel=res.Users;
    })
  }
}

//GetUsersByCities
