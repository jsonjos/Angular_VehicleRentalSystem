import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { LoginCustomer } from 'src/app/models/customer/LoginCustomer';
import { Router } from '@angular/router';
import { RegCustomer } from 'src/app/models/customer/RegCustomer';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginCustomer: LoginCustomer = new LoginCustomer();
  registercustomer: RegCustomer = new RegCustomer();
  customerid?: number = -1;

  constructor(private customerService: CustomerService, private router: Router) { }
  login() {
    this.customerService.loginCustomer(this.loginCustomer).subscribe(
      {
        next: (data) => {
          
          this.registercustomer = data;
          this.customerid = this.registercustomer.customerId;
          console.log(this.registercustomer);
          localStorage.setItem("user",JSON.stringify(this.registercustomer));

            // localStorage.setItem("customerid", JSON.stringify(this.customerid));

          console.log("Login Successful!");
          // alert("Login Successful. Redirecting to Landing Page..")
          this.router.navigateByUrl("landing/customer");
        },
        error: (err) => {
          console.log(err);
          alert(err.error);

          // this.router.navigateByUrl("register/customer");
        },
        complete: () => {
          console.log("completed successfully");
        }
      }
    );
  }
}
