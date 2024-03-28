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
import { AdminComponent } from './components/admin/admin.component';
import { AdminlandingComponent } from './components/adminlanding/adminlanding.component';
import { AddvehicleComponent } from './components/addvehicle/addvehicle.component';
import { LinkaccountComponent } from './components/linkaccount/linkaccount.component';
import { ViewprofileComponent } from './components/viewprofile/viewprofile.component';
import { DeactivateAccountComponent } from './components/deactivate-account/deactivate-account.component';
import { ViewbookingsComponent } from './components/viewbookings/viewbookings.component';

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
    AdminComponent,
    AdminlandingComponent,
    AddvehicleComponent,
    LinkaccountComponent,
    ViewprofileComponent,
    DeactivateAccountComponent,
    ViewbookingsComponent
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
