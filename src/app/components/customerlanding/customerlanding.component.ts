import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/models/booking/Booking';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customerlanding',
  templateUrl: './customerlanding.component.html',
  styleUrls: ['./customerlanding.component.css']
})
export class CustomerlandingComponent {
  bookingList:Booking[]=[];
  constructor(private customerService:CustomerService,private router:Router){}
  logout(){
    alert("Are you sure want to logout?");
    localStorage.clear();
    this.router.navigateByUrl("home");
  }
  view(){
    this.customerService.viewBookingList().subscribe(
      {
        next:(data) =>{
          console.log(data);
          this.bookingList=data;
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
}
