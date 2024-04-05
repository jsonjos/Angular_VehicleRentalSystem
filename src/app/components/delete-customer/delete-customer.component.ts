
import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})

  export class DeleteCustomerComponent {
    customerId!: number;
    successMessage!: string;
  
    constructor(private adminService: AdminService) {}
  
    deleteCustomer() {
      this.adminService.deleteResource(this.customerId).subscribe({
        next: (response) => {
          console.log('Customer deleted successfully', response);
          this.successMessage = response.body || 'Customer updated successfully';
          
        },
        error: (error) => console.error('There was an error!', error)
      });
        
    }
  }

