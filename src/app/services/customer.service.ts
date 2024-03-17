import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer/customer';
import { LoginCustomer } from '../models/customer/LoginCustomer';
import { DeleteCustomer } from '../models/customer/DeleteCustomer';
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
  
}
