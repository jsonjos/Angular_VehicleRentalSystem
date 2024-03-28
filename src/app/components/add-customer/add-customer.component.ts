
import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customer/customer';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  customer: Customer = new Customer('', '', '');
  successMessage!: string;
  showMessage = false;

  constructor(private adminService: AdminService) {}

  addCustomer(): void {
    this.adminService.addCustomer(this.customer).subscribe({
      next: (data) => {
        console.log('Customer added successfully', data);
        // Reset form or provide feedback to the user
        this.successMessage="Customer Added Successfully!!";
        this.showMessage = true;
        this.customer = new Customer('', '', '');
      },
      error: (error) => {console.error('There was an error!', error);
      alert("Error Adding the Customer");
    }
    });
  }
}

