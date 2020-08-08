import { Injectable } from '@angular/core';
import { Api } from '../provider/Api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(public api: Api) { }

  public getCoupons(PageNumber,company,plant,packaging,deliveryType,from,to,inco): Observable<any> {
    return this.api.get("Reports/Coupon?PageNumber="+PageNumber+"&company="+company+"&plant="+plant+"&packaging="+packaging+"&deliveryType="+deliveryType+"&from="+from+"&to="+to+"&inco="+inco);
   
  }

  public ExportCoupons(PageNumber,company,plant,packaging,deliveryType,from,to,inco): Observable<any> {
    
    return this.api.get("Reports/ExportCoupon?PageNumber="+PageNumber+"&company="+company+"&plant="+plant+"&packaging="+packaging+"&deliveryType="+deliveryType+"&from="+from+"&to="+to+"&inco="+inco);
   
  }
  public getVolumes(PageNumber,inco): Observable<any> {
    return this.api.get("Reports/Volumes?PageNumber="+PageNumber+"&inco="+inco);
   
  }
  public ExportVolumes(inco): Observable<any> {
    return this.api.get("Reports/ExportVolumes?&inco="+inco);
   
  }

  public getVolumesChart(): Observable<any> {
    return this.api.get("Reports/GetVolumesChart");
   
  }

  public getVolumesChartyear(): Observable<any> {
    return this.api.get("Reports/GetVolumesChartYear");
   
  }
  
  public getTrucks(PageNumber): Observable<any> {
    return this.api.get("Reports/GetTrucks?pageNumber="+PageNumber);

  }
  public GetTruckById(id): Observable<any> {
    return this.api.get("Reports/GetTruckById?Id="+id);
  }
  public getDrivers(PageNumber) {
    return this.api.get("Reports/GetDrivers?pageNumber="+PageNumber);
  }
  public getDriversLookup() {
    return this.api.get("Reports/GetDriversLookup");
  }
  public GetDriverById(id): Observable<any> {
    return this.api.get("Reports/GetDriverById?Id="+id);
  }
  public SaveTrucks(model): Observable<any> {
    return this.api.post("Reports/SaveTrucks",model);
  }
  public SaveDriver(model): Observable<any> {
      debugger
    return this.api.post("Reports/SaveDriver",model)
  }
  public SaveDriver_(model): Observable<any> {
      debugger
    return this.api.post("Reports/SaveDriver_",model);
 }
 public UpdateCouponsExw(couponId,driverId,truckId,trailId): Observable<any> {
  return this.api.get("Reports/UpdateCouponsExw??couponId=" + couponId +
                                                "&driverId=" + driverId +
                                                "&truckId=" + truckId +
                                                "&trailId=" + trailId);
}
 
  // int DummyKey, int TransporterID,
  //           int DriverID,string DriverName, string DriverLiscense, 
  //           string DriverMobileNumber, string UpdateRequest,string LicValid
}
