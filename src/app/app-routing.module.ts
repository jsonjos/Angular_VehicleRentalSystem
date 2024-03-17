import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerlandingComponent } from './components/customerlanding/customerlanding.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ActiveVehiclesComponent } from './components/active-vehicles/active-vehicles.component';


const routes: Routes = [
  {path:'register/customer',component:RegisterComponent},
  {path:'login/customer',component:LoginComponent},
  {path:'landing/customer',component:CustomerlandingComponent},
  {path:'home',component:CarouselComponent},
  {path:'landing/customer/vehicles/active',component:ActiveVehiclesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
