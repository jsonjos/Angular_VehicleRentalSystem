import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLogin } from 'src/app/models/admin/AdminLogin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  adminLogin:AdminLogin=new AdminLogin();
  constructor(private adminService:AdminService,private router:Router){}
  login(){
  this.adminService.loginAdmin(this.adminLogin).subscribe(
    {
      next:(data) =>{
        console.log(data);
        console.log("Login Successful!");
        alert("Login Successful. Redirecting to Admin Landing Page..")
        this.router.navigateByUrl("landing/admin");
      },
      error:(err) => {
        console.log(err);
        alert(err.error);
        
        // this.router.navigateByUrl("register/customer");
      },
      complete:()=>{
        console.log("completed successfully");
      }
    }
  );
}
}
