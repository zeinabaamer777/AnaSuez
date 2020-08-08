import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DriversModule } from '../models/drivers/drivers.module';

@Injectable({
  providedIn: 'root'
})
export class ReportDTService {

  constructor(private http: HttpClient) {}

    getDrivers(PageNumber) {
      //this.api.get("Reports/GetDrivers?pageNumber="+PageNumber);
        return this.http.get("Reports/GetDrivers?pageNumber="+PageNumber)
                    .toPromise()
                    .then(res => <DriversModule[]> res)
                    .then(data => { return data; });
                    //this.data = resp.LtmDriverses as DriversModule[];
    }
}
