import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';
import { USER } from 'src/app/utils/users.dat';

@Component({
  selector: 'app-data-edit-users',
  templateUrl: './data-edit-users.component.html',
  styleUrls: ['./data-edit-users.component.scss'],
})
export class DataEditUsersComponent implements OnInit {
  title = 'Ingreso de datos';
  user = new USER();

  constructor(
    public dialogRef: MatDialogRef<DataEditUsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    this.data ? (this.user = this.userService.getOneUser(this.data)) : null;
  }

  resolveDialog(): void {
    this.dialogRef.close();
  }
}
