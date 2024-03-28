import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerlandingComponent } from './components/customerlanding/customerlanding.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ActiveVehiclesComponent } from './components/active-vehicles/active-vehicles.component';
import { BookingComponent } from './components/booking/booking.component';
import { ReturnVehiclesComponent } from './components/return-vehicles/return-vehicles.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminlandingComponent } from './components/adminlanding/adminlanding.component';
import { AddvehicleComponent } from './components/addvehicle/addvehicle.component';
import { LinkaccountComponent } from './components/linkaccount/linkaccount.component';
import { DeactivateAccountComponent } from './components/deactivate-account/deactivate-account.component';
import { ViewbookingsComponent } from './components/viewbookings/viewbookings.component';


const routes: Routes = [
  {path:'register/customer',component:RegisterComponent},
  {path:'login/customer',component:LoginComponent},
  {path:'landing/customer',component:CustomerlandingComponent},
  {path:'home',component:CarouselComponent},
  {path:'landing/customer/vehicles/active',component:ActiveVehiclesComponent},
  {path:'landing/customer/vehicles/return',component:ReturnVehiclesComponent},
  {path:'payment',component:BookingComponent},
  {path:'login/admin',component:AdminComponent},
  {path:'landing/admin',component:AdminlandingComponent},
  {path:'landing/admin/vehicle/post',component:AddvehicleComponent},
  {path:'landing/customer/link',component:LinkaccountComponent},
  {path:'landing/customer/deactivate',component:DeactivateAccountComponent},
  {path:'landing/customer/view/bookings',component:ViewbookingsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
