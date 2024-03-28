import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DeactivateCustomer } from 'src/app/models/customer/DeactivateCustomer';
import { LoginCustomer } from 'src/app/models/customer/LoginCustomer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-deactivate-account',
  templateUrl: './deactivate-account.component.html',
  styleUrls: ['./deactivate-account.component.css']
})
export class DeactivateAccountComponent {
  password:DeactivateCustomer=new DeactivateCustomer();
  constructor(private customerService:CustomerService,private router:Router){}
  deactivate() {
    this.customerService.deactivateAccount(this.password).subscribe(
      {
        next: (data) => {
          console.log("Login Successful!");
          localStorage.clear();
          this.router.navigateByUrl("home");
        },
        error: (err) => {
          console.log(err);

        },
        complete: () => {
          console.log("completed successfully");
        }
      }
    );
  }
}
