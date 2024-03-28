import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BankCredentials } from 'src/app/models/customer/BankCredentials';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-linkaccount',
  templateUrl: './linkaccount.component.html',
  styleUrls: ['./linkaccount.component.css']
})
export class LinkaccountComponent {
  bankCredentials:BankCredentials=new BankCredentials();
  constructor(private customerService: CustomerService, private router: Router) { }
  link() {
    this.customerService.addCustomerBankAccount(this.bankCredentials).subscribe(
      {
        next: (data) => {
          console.log(data);
          console.log("Linked Successful!");
          this.router.navigateByUrl("landing/customer");
        },
        error: (err) => {
          console.log(err);
          alert(err.error);
        },
        complete: () => {
          console.log("completed successfully");
        }
      }
    );
  }
}
