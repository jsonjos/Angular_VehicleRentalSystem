import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminLogin } from '../models/admin/AdminLogin';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }
  loginAdmin(adminLogin:AdminLogin):Observable<any>{
    return this.httpClient.post('http://localhost:8080/home/admin/login',adminLogin);
  }
}
