import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DriversModule { 
  DummyKey:number;
  TransporterID:string ;
  DriverID:string;
  DriverName:string;
  DriverLiscense:string ;
  DriverMobileNumber:string;
  UpdateRequest:string;
  LicValid:string;
}
export class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
  LtmDriverses:DriversModule[];
}
//  public int DummyKey { get; set; }
//         public Nullable<int> TransporterID { get; set; }
//         public Nullable<int> DriverID { get; set; }
//         public string DriverName { get; set; }
//         public string DriverLiscense { get; set; }
//         public string DriverMobileNumber { get; set; }
//         public string UpdateRequest { get; set; }
//         public string LicValid { get; set; }