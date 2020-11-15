import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeesService } from 'src/app/services/employees.service';
import { IEMPLOYEE } from 'src/app/utils/employee.data';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
})
export class CreateEmployeeComponent implements OnInit {
  title = 'Ingreso de datos';
  employee = new IEMPLOYEE();

  constructor(
    public dialogRef: MatDialogRef<CreateEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employeeService: EmployeesService
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    this.data
      ? (this.employee = this.employeeService.getOneEmployee(this.data))
      : null;
  }

  resolveDialog(): void {
    this.dialogRef.close();
  }
}
