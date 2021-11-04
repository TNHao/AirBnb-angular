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
import { HeaderComponent } from './components/header/header.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input"
import { MatButtonModule } from "@angular/material/button"
import { MatCardModule } from "@angular/material/card";
import { MatRadioModule } from "@angular/material/radio";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LogInComponent,
    SignUpComponent,
    PageNotFoundComponent,
    SidenavComponent, 
    FooterComponent, 
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    AdminRoutingModule,
    ClientRoutingModule, 
    MatFormFieldModule,
    MatInputModule, 
    MatButtonModule, 
    MatCardModule,
    ReactiveFormsModule, 
    FormsModule, 
    MatRadioModule, 
    MatDatepickerModule
  ],
  exports: [
    SidenavComponent,
    FooterComponent, 
    HeaderComponent
  ],
})
export class SharedModule { }
