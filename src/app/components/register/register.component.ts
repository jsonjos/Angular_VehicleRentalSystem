import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customer/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
newCustomer:Customer=new Customer();
constructor(private customerService:CustomerService,private router:Router){}
register(){
this.customerService.registerCustomer(this.newCustomer).subscribe(
  {
    next:(data) =>{
      console.log(data);
          console.log("Register User Successful!");
          alert("Registration Successful. Redirecting to Login page..")
          this.router.navigateByUrl("login/customer");
    },
    error:(err) => {
      console.log(err);
      alert(err.error);

    }
  }
);
}
}


