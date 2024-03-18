import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VehiclePayment } from 'src/app/models/vehicle/VehiclePayment';
import { VehicleService } from 'src/app/services/vehicle.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
 newVehiclePayment:VehiclePayment=new VehiclePayment();
constructor(private vehicleService:VehicleService,private router:Router){}
payment(){
this.vehicleService.paymentVehicles(this.newVehiclePayment).subscribe(
  {
    next:(data) =>{
      console.log(data);
          console.log("Booking successful");
          alert("Successful")
          this.router.navigateByUrl("");
    },
    error:(err) => {
      console.log(err);
      // alert(err.error);

    }
  }
);
}
}
