
import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customer/customer';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent {
  customer: Customer = new Customer('', '', '');
  successMessage!: string;
  showMessage = false;

  constructor(private adminService: AdminService) {}

  updateCustomer(): void {
    this.adminService.updateCustomer(this.customer).subscribe({
      next: (data) => {
        console.log('Customer updated successfully', data);
        // Reset form or provide feedback to the user
        this.successMessage="Customer Updated Successfully!!";
        this.showMessage = true;
        this.customer = new Customer('', '', '');
      },
      error: (error) => console.error('There was an error!', error)
    });
  }
}

