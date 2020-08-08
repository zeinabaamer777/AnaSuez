import { Injectable } from '@angular/core';
import { Api } from '../provider/Api';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(public api: Api) { }

  public loadPlants(): Observable<any> {
    return this.api.get("Plant/GetPlants");
  }
}
