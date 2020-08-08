import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CityModel } from 'src/app/models/CityModel';
import { CityService } from 'src/app/services/city.service';
import { TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/config/language';

@Component({
  selector: 'city-lookup',
  templateUrl: './city-lookup.component.html',
  styleUrls: ['./city-lookup.component.css']
})
export class CityLookupComponent implements OnInit {
  cities: CityModel[];
  //@Output() cityId; 
  index:number;
  @Output() cityId=new EventEmitter<{Id:number }>();

  @Input() orderId:number
  constructor(private translate: TranslateService,private lang:Language,
    private _cityService: CityService) { }

  ngOnInit() {
    debugger
    this._cityService.CityOnOrder(this.orderId).subscribe((res) => {
      debugger
      this.cities = res.cities;
      
    });

  }
  getCity(event)
  {
    debugger;
    this.index=event.target.selectedIndex-1;
    this.cityId.emit({Id:this.cities[this.index].Id });
  }
}
