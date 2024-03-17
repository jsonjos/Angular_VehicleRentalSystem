import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { LoginCustomer } from 'src/app/models/customer/LoginCustomer';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginCustomer:LoginCustomer=new LoginCustomer();
  alertService: any;
  constructor(private customerService:CustomerService,private router:Router){}
  login(){
  this.customerService.loginCustomer(this.loginCustomer).subscribe(
    {
      next:(data) =>{
        console.log(data);
          console.log("Login Successful!");
            alert("Login Successful. Redirecting to Landing Page..")
            this.router.navigateByUrl("landing/customer");
      },
      error:(err) => {
        console.log(err);
        alert(err.error);

      },
      complete:()=>{
        console.log("completed successfully");
      }
    }
  );
}
}
