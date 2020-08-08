import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CityModel } from 'src/app/models/CityModel';
import { LookupModel } from 'src/app/models/LookupModel';
import { TranslateService } from '@ngx-translate/core';
import { ReportsService } from 'src/app/services/reports.service';
import { Language } from 'src/app/config/language';

@Component({
  selector: 'driver-lookup',
  templateUrl: './driver-lookup.component.html',
  styleUrls: ['./driver-lookup.component.css']
})
export class DriverLookupComponent implements OnInit {

  data: LookupModel[];
  //@Output() cityId; 
  index:number;
  @Output() OutputdriverId=new EventEmitter<{Id:number }>();

  @Input() InputdriverId:number
  constructor(private translate: TranslateService,private lang:Language,
    private _reportsService: ReportsService) { }

  ngOnInit() {
    debugger
    this._reportsService.getDriversLookup().subscribe((res) => {
      debugger
    this.data = res.LookUpObjectModels as LookupModel[] ;

    //  this.lookup = res.;
      
    });

  }
  getDriver(event)
  {
    debugger;
    this.index=event.target.selectedIndex-1;
   this. OutputdriverId.emit({Id:this.data[this.index].Id });
  }
}
