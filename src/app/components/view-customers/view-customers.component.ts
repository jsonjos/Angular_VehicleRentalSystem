
import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { RegCustomer } from 'src/app/models/customer/RegCustomer';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent {
  customers: RegCustomer[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.fetchAllCustomers();
  }

  fetchAllCustomers(): void {
    this.adminService.getAllCustomers().subscribe({
      next: (data) => {
        this.customers = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }

  handleDeleteCustomer(customerId: number | undefined): void {
    if (customerId !== undefined) {
      this.adminService.deleteResource(customerId).subscribe(
        () => {
          this.customers = this.customers.filter(customer => customer.customerId !== customerId);
        },
        (error) => {
          console.error('Error deleting customer', error);
        }
      );
    } else {
      console.error('Invalid customerId provided');
    }
  }
}
