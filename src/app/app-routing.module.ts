import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { HomeComponent } from './components/home/home.component';
import { StorageComponent } from './components/storage/storage.component';
import { ClientsComponent } from './components/clients/clients.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employees/list', component: EmployeesComponent },
  { path: 'users/list', component: UsersComponent },
  { path: 'storage', component: StorageComponent,
    children: []
  },
  { path: 'clients', component: ClientsComponent,
    children: []
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
