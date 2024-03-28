import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActiveVehicle } from '../models/vehicle/VehicleLocation';
import { Observable } from 'rxjs';
import { VehiclePayment } from '../models/vehicle/VehiclePayment';
import { VehicleBooking } from '../models/vehicle/VehicleBooking';
import { ReturnVehicle } from '../models/vehicle/ReturnVehicle';
import { Vehicle } from '../models/vehicle/Vehicle';
import { LoginCustomer } from '../models/customer/LoginCustomer';
import { RegCustomer } from '../models/customer/RegCustomer';
import { Booking } from '../models/booking/Booking';
@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  constructor(private httpClient:HttpClient) { 

  }
  // userLocation:ActiveVehicle=new ActiveVehicle();
  viewActiveVehicles(location:string):Observable<any>{
    return this.httpClient.get('http://localhost:8080/home/viewActive/'+location);
  }
  bookVehicles(vehicleId?:VehicleBooking):Observable<any>{
    const user:RegCustomer=JSON.parse( localStorage.getItem("user")||'');
    console.log(user);
    return this.httpClient.post('http://localhost:8080/home/bookVehicle/'+user.customerId,vehicleId);
  }
  paymentVehicles(vehiclePayment:VehiclePayment):Observable<any>{
    const booking:Booking=JSON.parse( localStorage.getItem("booking details")||'');
    return this.httpClient.post('http://localhost:8080/home/amountTransfer/'+booking.bookingId,vehiclePayment);
  }
  returnVehicles(returnVehicle:ReturnVehicle):Observable<any>{
    return this.httpClient.post('http://localhost:8080/home/returnVehicle',returnVehicle);
  }
  addVehicle(newVehicle:Vehicle):Observable<any>{
    return this.httpClient.post('http://localhost:8080/home/post',newVehicle);
  }
}
