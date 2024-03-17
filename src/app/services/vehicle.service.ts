import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActiveVehicle } from '../models/vehicle/VehicleLocation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  // location?:string="";
  constructor(private httpClient:HttpClient) { }
  // userLocation:ActiveVehicle=new ActiveVehicle();
  viewActiveVehicles(location:string):Observable<any>{
    return this.httpClient.get('http://localhost:8080/home/viewActive/'+location);
  }
}
