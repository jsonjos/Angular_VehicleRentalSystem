import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/models/vehicle/Vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.component.html',
  styleUrls: ['./addvehicle.component.css']
})
export class AddvehicleComponent {
  
newVehicle:Vehicle=new Vehicle();
constructor(private vehicleService:VehicleService,private router:Router){}
add(){
this.vehicleService.addVehicle(this.newVehicle).subscribe(
  {
    next:(data) =>{
      console.log(data);
          console.log("Vehicle Added Successful!");
          alert("Vehicle added successfully.")
          // this.router.navigateByUrl("landing/admin");
    },
    error:(err) => {
      console.log(err);
      alert(err.error);

    }
  }
);
}
}
