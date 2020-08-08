import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TrucksModelModule { 
    DummyKey:number;
    TransporterID?:number 
    TruckSAPID:string
    TruckLicense :string
    TrailerLicense :string
    TrailerValid :string 
}
