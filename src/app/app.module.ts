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
import { CreateEmployeeComponent } from './components/employees/create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';
import { DataEditUsersComponent } from './components/users/data-edit-users/data-edit-users.component';
import { ComprasComponent } from './components/compras/compras.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { StorageComponent } from './components/storage/storage.component';
import { ClientsComponent } from './components/clients/clients.component';
import { GenericDialogComponent } from './components/shared/generic-dialog/generic-dialog.component';
import { SolutionsComponent } from './components/solutions/solutions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeCardComponent,
    NavbarComponent,
    EmployeesComponent,
    UsersComponent,
    CreateEmployeeComponent,
    DataEditUsersComponent,
    ComprasComponent,
    VentasComponent,
    StorageComponent,
    ClientsComponent,
    GenericDialogComponent,
    SolutionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
