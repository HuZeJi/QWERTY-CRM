import { Injectable } from '@angular/core';
import { EMPLOYEE, IEMPLOYEE } from '../utils/employee.data';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  employees: IEMPLOYEE[] = [];
  employeeData = new EMPLOYEE();

  constructor() {}

  fillEmployees(): any {
    console.log(this.employees);
    this.employees =
      this.employees.length <= 0
        ? this.employeeData.dataFill()
        : this.employees;
  }

  getEmployees(): IEMPLOYEE[] {
    return this.employees;
  }

  getOneEmployee(id: number): IEMPLOYEE {
    return this.employees.find((e) => e.id === id);
  }

  setEmployees(newEmployees: IEMPLOYEE[]): void {
    this.employees = newEmployees;
  }

  dataEdit(employee: IEMPLOYEE): void {
    this.employees = this.employees.map(
      (element) => (element = element.id === employee.id ? employee : element)
    );
  }

  newRegister(employee: IEMPLOYEE): void {
    this.employees.push(employee);
  }

  deleteRegister(id: number): void {
    this.employees.splice(
      this.employees.indexOf(this.employees.find((e) => e.id === id)),
      1
    );
  }
}
