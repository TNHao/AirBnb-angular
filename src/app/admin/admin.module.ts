import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { LocationManagementComponent } from './pages/location-management/location-management.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    AdminComponent,
    UserManagementComponent,
    LocationManagementComponent
  ],
  imports: [
    CommonModule, 
    AdminRoutingModule
  ]
})
export class AdminModule { }
