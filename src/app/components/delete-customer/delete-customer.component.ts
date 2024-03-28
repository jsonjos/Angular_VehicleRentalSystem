
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
      this.adminService.deleteResource(this.customerId).
      subscribe({
        next: (response) => {
          // Assuming the response body is the success message
          this.successMessage = response.body || 'Customer deleted successfully';
          console.log(response.body);
          //this.router.navigate(['landing/admin']);
        },
        error: (error) => {
          console.error('Error deleting customer:', error);
        }
    }
    );
        
    }
  }

