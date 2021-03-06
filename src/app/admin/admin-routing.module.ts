import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LocationManagementComponent } from './pages/location-management/location-management.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component: UserManagementComponent },
      { path: 'location-management', component: LocationManagementComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
