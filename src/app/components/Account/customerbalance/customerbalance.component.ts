import { Component, OnInit } from '@angular/core';
import { StaticListsService } from 'src/app/services/static-lists.service';
import { Language } from 'src/app/config/language';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'customerbalance',
  templateUrl: './customerbalance.component.html',
  styleUrls: ['./customerbalance.component.css']
})
export class CustomerbalanceComponent implements OnInit {
  SueazBalance:number;
  HelwanBalance:number;
  TorahaBalance:number;
  SumBalance:number;
  TorhAccount=1333;
  SueazAccount=1332;
  HelwanAccount=1385;
  //1333,1332,1385
//   1333- طره 
// 1332- السويس  
// 1385 - حلوان
  constructor(private _staticListsService:StaticListsService,
    private _lang:Language,private _transalet:TranslateService) { } 

  ngOnInit() {
    debugger
    this._staticListsService.GetUserBalance(this.SueazAccount).subscribe((res) => {
      this.SueazBalance=res
      this.SumBalance= parseInt(res);
     });
     this._staticListsService.GetUserBalance(this.HelwanAccount).subscribe((res) => {
      this.HelwanBalance=parseInt(res)
      this.SumBalance=this.SumBalance +this.HelwanBalance

     });this._staticListsService.GetUserBalance(this.TorhAccount).subscribe((res) => {
      this.TorahaBalance=parseInt(res)
      this.SumBalance=this.SumBalance +this.TorahaBalance
     });

  }
 

}
