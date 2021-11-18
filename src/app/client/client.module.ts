import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { HomeComponent } from './pages/home/home.component';
import { RoomListComponent } from './pages/room-list/room-list.component';
import { RoomDetailComponent } from './pages/room-detail/room-detail.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UpdateInfoDialogComponent } from './pages/user-info/update-info-dialog/update-info-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    ClientComponent,
    HomeComponent,
    RoomListComponent,
    RoomDetailComponent,
    UserInfoComponent,
    UpdateInfoDialogComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule, 
    SharedModule, 
    MatDialogModule,
    MatDividerModule,
    MatIconModule, 
    MatProgressBarModule
  ]
})
export class ClientModule { }
