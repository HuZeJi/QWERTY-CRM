import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { HomeComponent } from './components/home/home.component';
import { StorageComponent } from './components/storage/storage.component';
import { ClientsComponent } from './components/clients/clients.component';
import { UsersComponent } from './components/users/users.component';
import { ComprasComponent } from './components/compras/compras.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { BugsReportComponent } from './components/bugs-report/bugs-report.component';
import { DefaultViewComponent } from './components/default-view/default-view.component';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: DefaultViewComponent },
=======
  { path: '', component: StorageComponent },
>>>>>>> 88e918a76451486140fb4345ed546809e36759c6
  { path: 'employees/list', component: EmployeesComponent },
  { path: 'users/list', component: UsersComponent },
  { path: 'buys/list', component: ComprasComponent },
  { path: 'sells/list', component: VentasComponent },
  { path: 'licences', component: StorageComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'bugsreport', component: BugsReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
