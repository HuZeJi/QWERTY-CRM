import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { UsersComponent } from './components/users/users.component';
import { StorageComponent } from './components/storage/storage.component';
import { ClientsComponent } from './components/clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeCardComponent,
    NavbarComponent,
    EmployeesComponent,
    UsersComponent,
    StorageComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
