import { Component, OnInit, Output ,EventEmitter, Input} from '@angular/core';
import { Language } from 'src/app/config/language';
import { TranslateService } from '@ngx-translate/core';
import { StaticListsService } from 'src/app/services/static-lists.service';
import { CommonModule } from '@angular/common';
import { CommonModules } from 'src/app/models/ResetModes';
 

@Component({
  selector: 'app-deliver-order-way',
  templateUrl: './deliver-order-way.component.html',
  styleUrls: ['./deliver-order-way.component.css']
})
export class DeliverOrderWayComponent implements OnInit {
  commonModel:CommonModules[];
  @Output() typeId=new EventEmitter<{Id:number}>();
  @Input() valueOrderType;
   index:number;
   nrSelect:number;
  constructor(private _deliverWayMethods:StaticListsService,
    private _lang:Language,private _transalet:TranslateService) { }

  ngOnInit() {
    this._deliverWayMethods.DeliverWayMethods().subscribe((res) => {
     this. commonModel=res .list as CommonModules[]
    });
    debugger
    //if(!this.valueOrderType){
       this.nrSelect=this.valueOrderType;
    //}
  }
  getdeliverWay(event)
  {
    debugger
    this.index=event.target.selectedIndex-1;
    this.typeId.emit({Id:this.commonModel[this.index].Id})
  }
  // getCity(event)
  // {
  //   debugger;
  //   this.index=event.target.selectedIndex-1;
  //   this.cityId.emit({Id:this.cities[this.index].Id });
  // }

}
