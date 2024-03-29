import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookVehicle } from 'src/app/models/vehicle/BookVehicle';
import { Vehicle } from 'src/app/models/vehicle/Vehicle';
import { VehicleBooking } from 'src/app/models/vehicle/VehicleBooking';
import { ActiveVehicle } from 'src/app/models/vehicle/VehicleLocation';
import { VehiclePayment } from 'src/app/models/vehicle/VehiclePayment';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-active-vehicles',
  templateUrl: './active-vehicles.component.html',
  styleUrls: ['./active-vehicles.component.css']
})
export class ActiveVehiclesComponent {
  location:string="";
  vehiclelist:Vehicle[]=[];
  vehicleBooking:VehicleBooking=new VehicleBooking();
  bookingDetails: BookVehicle=new BookVehicle();
  constructor(private vehicleService:VehicleService,private router:Router){}
  view(){
    this.vehicleService.viewActiveVehicles(this.location).subscribe(
      {
        next:(data) =>{
          console.log(data);
          this.vehiclelist=data;
        },
        error:(err) => {
          console.log(err);
          window.alert(err.error);

        },
        complete:()=>{
          console.log("completed successfully");
        }
      }
    );
  }
 
  book(vehicleNumber?:number){
    this.vehicleBooking.vehicleId=vehicleNumber;
    console.log(vehicleNumber);
    this.vehicleService.bookVehicles(this.vehicleBooking).subscribe(
      {
        next:(data) =>{
          console.log(data);
          this.bookingDetails = data;
          localStorage.setItem("booking details",JSON.stringify(this.bookingDetails));
          this.vehiclelist=data;
           this.router.navigateByUrl("payment");
        },
        error:(err) => {
          console.log(err);
        },
        complete:()=>{
          console.log("completed successfully");
        }
      }
    );
  }
}
