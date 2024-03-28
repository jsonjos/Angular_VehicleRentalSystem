import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customer/customer';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent {
  customer: Customer = {};
  successMessage!: string;
  showMessage = false;
  customerId:number=-1;
  isPresent:boolean=false;
  
  
  constructor(private adminService: AdminService,private router:Router) {}

  evaluate() {
    this.adminService.getCustomerById(this.customerId).subscribe
    ({
        next:data=>
      {
        console.log(data);
        this.customer=data;
        this.isPresent=true;
      },
      error(error)
      {
        console.error("Customer Not Present",error);
      }
    });

  }

  updateCustomer(): void {
    this.adminService.updateCustomer(this.customer).subscribe({
      next: (response) => {
        console.log('Customer updated successfully', response);
        this.successMessage = response || 'Customer updated successfully';
        this.showMessage = true;
        this.customer = new Customer('', '', '');
      },
      error: (error) => console.error('There was an error!', error)
    });
  }
  
}
