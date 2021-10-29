import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { HomeComponent } from './pages/home/home.component';
import { RoomListComponent } from './pages/room-list/room-list.component';
import { RoomDetailComponent } from './pages/room-detail/room-detail.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ClientComponent,
    HomeComponent,
    RoomListComponent,
    RoomDetailComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule, 
    SharedModule
  ]
})
export class ClientModule { }
