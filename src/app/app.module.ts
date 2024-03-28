import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CustomerlandingComponent } from './components/customerlanding/customerlanding.component';
import { ActiveVehiclesComponent } from './components/active-vehicles/active-vehicles.component';
import { BookingComponent } from './components/booking/booking.component';
import { ReturnVehiclesComponent } from './components/return-vehicles/return-vehicles.component';

import { AdminlandingComponent } from './components/adminlanding/adminlanding.component';
import { AddvehicleComponent } from './components/addvehicle/addvehicle.component';
import { LinkaccountComponent } from './components/linkaccount/linkaccount.component';
import { ViewprofileComponent } from './components/viewprofile/viewprofile.component';
import { DeactivateAccountComponent } from './components/deactivate-account/deactivate-account.component';
import { ViewbookingsComponent } from './components/viewbookings/viewbookings.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
import { ViewCustomersComponent } from './components/view-customers/view-customers.component';
import { UpdateVehiclesComponent } from './components/update-vehicles/update-vehicles.component';
import { ViewVehiclesComponent } from './components/view-vehicles/view-vehicles.component';
import { DeleteVehicleComponent } from './components/delete-vehicle/delete-vehicle.component';
import { AdminActiveVehiclesComponent } from './components/admin-active-vehicles/admin-active-vehicles.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    CustomerlandingComponent,
    ActiveVehiclesComponent,
    BookingComponent,
    ReturnVehiclesComponent,
    AdminlandingComponent,
    AddvehicleComponent,
    LinkaccountComponent,
    ViewprofileComponent,
    DeactivateAccountComponent,
    ViewbookingsComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    ViewCustomersComponent,
    UpdateVehiclesComponent,
    ViewVehiclesComponent,
    DeleteVehicleComponent,
    AdminActiveVehiclesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
