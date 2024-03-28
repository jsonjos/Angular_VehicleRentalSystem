import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReturnVehicle } from 'src/app/models/vehicle/ReturnVehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-return-vehicles',
  templateUrl: './return-vehicles.component.html',
  styleUrls: ['./return-vehicles.component.css']
})
export class ReturnVehiclesComponent {
  vehicleReturn:ReturnVehicle=new ReturnVehicle();
  constructor(private vehicleService:VehicleService,private router:Router){}
  returnVeh(){
    this.vehicleService.returnVehicles(this.vehicleReturn).subscribe(
      {
        next:(data) =>{
          console.log(data);
          this.vehicleReturn=data;
          alert("Vehicle returned successfully");
          this.router.navigateByUrl("landing/customer");
        },
        error:(err) => {
          console.log(err);
          alert(err.error);
          this.router.navigateByUrl("landing/customer");

        },
        complete:()=>{
          console.log("completed successfully");
        }
      }
    );
  }

}
