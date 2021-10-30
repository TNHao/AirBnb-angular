import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { LocationManagementComponent } from './pages/location-management/location-management.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AdminComponent,
    UserManagementComponent,
    LocationManagementComponent
  ],
  imports: [
    CommonModule, 
    AdminRoutingModule,
    MatSidenavModule,
    MatIconModule,
    SharedModule
  ]
})
export class AdminModule { }
