import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer/customer';
import { LoginCustomer } from '../models/customer/LoginCustomer';
import { DeleteCustomer } from '../models/customer/DeleteCustomer';
import { BankCredentials } from '../models/customer/BankCredentials';
import { RegCustomer } from '../models/customer/RegCustomer';
import { DeactivateAccountComponent } from '../components/deactivate-account/deactivate-account.component';
import { DeactivateCustomer } from '../models/customer/DeactivateCustomer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  registerCustomer(newCustomer: Customer):Observable<any>{
    return this.httpClient.post('http://localhost:8080/home/register/customer',newCustomer);
  }
  loginCustomer(loginCustomer:LoginCustomer):Observable<any>{
    return this.httpClient.post('http://localhost:8080/home/login/customer',loginCustomer);
  }
  addCustomerBankAccount(bankCredentials:BankCredentials):Observable<any>{
    const user:RegCustomer=JSON.parse( localStorage.getItem("user")||'');
    return this.httpClient.post('http://localhost:8080/account/add/'+user.customerId,bankCredentials);
  }
  viewBookingList():Observable<any>{
    const user:RegCustomer=JSON.parse( localStorage.getItem("user")||'');
    return this.httpClient.get('http://localhost:8080/home/bookingList/'+user.customerId);
  }
  deactivateAccount(deactivateCustomer:DeactivateCustomer):Observable<any>{
    const user:RegCustomer=JSON.parse( localStorage.getItem("user")||'');
    return this.httpClient.patch('http://localhost:8080/home/deactivate/'+user.customerId,deactivateCustomer);
  }
}
