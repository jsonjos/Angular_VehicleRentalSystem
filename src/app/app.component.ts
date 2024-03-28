import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vehicle-rental-system'
  constructor(){
    var customerid=localStorage.getItem("customerId");
    const customerid1=localStorage.getItem("customerId");
  }
}
