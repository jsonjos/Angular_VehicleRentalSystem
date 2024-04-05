import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin/Admin';
import { LoginAdmin } from '../models/admin/LoginAdmin';
import { Customer } from '../models/customer/customer';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }

  loginAdmin(loginAdmin:LoginAdmin):Observable<any>{
    return this.httpClient.post('http://localhost:8080/home/admin/login',loginAdmin);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>('http://localhost:8080/home/customer/add', customer);
  }

  updateCustomer(customer: Customer): Observable<any> {
    return this.httpClient.put('http://localhost:8080/home/customer/update', customer, { responseType: 'text' });
  }

  private apiUrl = 'http://localhost:8080/home/customer/delete'; // Update this with your Spring Boot DELETE endpoint
  deleteResource(id: number) :Observable<any>{
    return this.httpClient.delete(`http://localhost:8080/home/customer/delete/${id}`, {responseType:'text'});
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('http://localhost:8080/home/AllCustomerDetails');
  }

  getCustomerById(customerId: number) {
    return this.httpClient.get('http://localhost:8080/home/customer/'+customerId);
  
  }
}
