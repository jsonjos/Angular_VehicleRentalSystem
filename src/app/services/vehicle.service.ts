import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActiveVehicle } from '../models/vehicle/VehicleLocation';
import { Observable } from 'rxjs';
import { VehiclePayment } from '../models/vehicle/VehiclePayment';
import { VehicleBooking } from '../models/vehicle/VehicleBooking';
import { ReturnVehicle } from '../models/vehicle/ReturnVehicle';

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
  bookVehicles(vehicleId?:VehicleBooking):Observable<any>{
    return this.httpClient.post('http://localhost:8080/home/bookVehicle',vehicleId);
  }
  paymentVehicles(vehiclePayment:VehiclePayment):Observable<any>{
    return this.httpClient.post('http://localhost:8080/home/amountTransfer',vehiclePayment);
  }
  returnVehicles(returnVehicle:ReturnVehicle):Observable<any>{
    return this.httpClient.post('http://localhost:8080/home/returnVehicle',returnVehicle);
  }
}
