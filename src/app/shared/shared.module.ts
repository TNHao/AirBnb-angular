import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { ClientRoutingModule } from '../client/client-routing.module';



@NgModule({
  declarations: [
    LogInComponent,
    SignUpComponent,
    PageNotFoundComponent,
    SidenavComponent, 
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    AdminRoutingModule,
    ClientRoutingModule
  ],
  exports: [
    SidenavComponent,
    FooterComponent
  ],
})
export class SharedModule { }
