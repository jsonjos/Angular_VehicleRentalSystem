import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  registerCustomer(newCustomer: Customer):Observable<any>{
    return this.httpClient.post('http://localhost:8080/home/register/customer',newCustomer);
  }

}
