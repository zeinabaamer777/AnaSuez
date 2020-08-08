import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DestinationService } from 'src/app/services/destination.service';
import { DestinationModel } from 'src/app/models/DestinationModel';
import { Language } from 'src/app/config/language';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'orderdestination',
  templateUrl: './orderdestination.component.html',
  styleUrls: ['./orderdestination.component.css']
})
export class OrderdestinationComponent implements OnInit {
  destination: DestinationModel[];
  index:number;
  @Input()  destinationId; 
  @Output() selectedValueId =new EventEmitter<{value : number }>();
  constructor(private _destinationService: DestinationService,private translate: TranslateService,private lang:Language) { }

  ngOnInit() {
    debugger
    //this.destinationId=null;
  this.loadDest() 
  //
  }
  selectedValue(event)
  {
    debugger
    this.index=event.target.selectedIndex-1;

     this.selectedValueId.emit({value:this.destination[this.index].Id});
  }
  loadDest() {
    debugger
    
    this._destinationService.getDestinations().subscribe((res) => {
      this.destination = res.destinations as DestinationModel[];
    });
  }
}
