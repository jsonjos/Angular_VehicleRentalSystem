import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { AdminService } from 'src/app/services/admin.service';
import { LoginCustomer } from 'src/app/models/customer/LoginCustomer';
import { Router } from '@angular/router';
import { RegCustomer } from 'src/app/models/customer/RegCustomer';
import { LoginAdmin } from 'src/app/models/admin/LoginAdmin';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginCustomer: LoginCustomer = new LoginCustomer();
  registercustomer: RegCustomer = new RegCustomer();
  loginAdmin: LoginAdmin = new LoginAdmin();
  isAdmin: boolean = false;
  customerid?: number = -1;

  constructor(private customerService: CustomerService, private adminService: AdminService,private router: Router) { }

  onUserTypeChange(event: any): void {
    const selectedUserType = event.target.value;
    this.isAdmin = selectedUserType === 'Admin';
  }

  login() {
    if(this.isAdmin){
      console.log('Admin login process');
      this.adminService.loginAdmin(this.loginAdmin).subscribe({
        next: (data) => {
          console.log(data);
          console.log("Login Successful!");
          alert("Login Successful. Redirecting to Landing Page..");
          this.router.navigateByUrl("landing/admin");
        },
        error: (err) => {
          console.log(err);
          alert(err.error);
        },
        complete: () => {
          console.log("Admin login completed successfully");
        }
      })
    }
    else{
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
}
