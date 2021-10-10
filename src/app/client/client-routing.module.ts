import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { HomeComponent } from './pages/home/home.component';
import { RoomDetailComponent } from './pages/room-detail/room-detail.component';
import { RoomListComponent } from './pages/room-list/room-list.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';

const routes: Routes = [
  {
    path: "",
    component: ClientComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "room-list", component: RoomListComponent },
      { path: "room-detail", component: RoomDetailComponent },
      { path: "user-info", component: UserInfoComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
