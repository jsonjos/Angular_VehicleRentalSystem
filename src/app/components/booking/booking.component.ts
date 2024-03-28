import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/models/booking/Booking';
import { RegCustomer } from 'src/app/models/customer/RegCustomer';
import { VehicleBooking } from 'src/app/models/vehicle/VehicleBooking';
import { VehiclePayment } from 'src/app/models/vehicle/VehiclePayment';
import { VehicleService } from 'src/app/services/vehicle.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  // bookingDetails:Booking=new Booking();
 newVehiclePayment:VehiclePayment=new VehiclePayment();
constructor(private vehicleService:VehicleService,private router:Router){}

payment(){
this.vehicleService.paymentVehicles(this.newVehiclePayment).subscribe(
  {
    next:(data) =>{
      console.log(data);
      // this.bookingDetails = data;
      //     // this.customerid = this.registercustomer.customerId;
      //     console.log(this.bookingDetails);
      //     localStorage.setItem("bookingDetails",JSON.stringify(this.bookingDetails));
          console.log("Booking successful");
          alert("Booking successful");
          this.router.navigateByUrl("/landing/customer");
    },
    error:(err) => {
      console.log(err);
      alert(err.error);
      this.router.navigateByUrl("/landing/customer");

    }
  }
);
}
}
