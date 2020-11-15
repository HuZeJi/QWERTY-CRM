import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { DataEditUsersComponent } from './data-edit-users/data-edit-users.component';
import { UsersService } from './../../services/users.service';
import { GENERAL } from './../../utils/general-util.data';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'nickname', 'password', 'actions'];

  // dataSource = new MatTableDataSource<any>();
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.usersService.fillUsers();
    this.loadData();
  }

  constructor(public dialog: MatDialog, private usersService: UsersService) {}

  applyFilter(event: Event): any {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadData(): void {
    this.dataSource = new MatTableDataSource(this.usersService.getUsers());
    this.dataSource.paginator = this.paginator;
  }

  newData(): void {
    const dialogRef = this.dialog.open(DataEditUsersComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        Swal.fire({
          title: 'Estas seguro de guardar los cambios?',
          showDenyButton: true,
          confirmButtonText: `Guardar`,
        }).then((confirmation) => {
          if (confirmation.isConfirmed) {
            this.usersService.newRegister(result);
            this.loadData();
            this.loadConfirmDialog();
          } else if (confirmation.isDenied) {
            this.loadDialogError();
          }
        });
      }
    });
  }

  editData(id: any): void {
    const dialogRef = this.dialog.open(DataEditUsersComponent, {
      data: id,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        Swal.fire({
          title: 'Estas seguro de guardar los cambios?',
          showDenyButton: true,
          confirmButtonText: `Guardar`,
        }).then((confirmation) => {
          if (confirmation.isConfirmed) {
            this.usersService.dataEdit(result);
            this.loadData();
            this.loadConfirmDialog();
          } else if (confirmation.isDenied) {
            this.loadDialogError();
          }
        });
      }
    });
  }

  deleteData(id: number): void {
    Swal.fire({
      title: 'Estas seguro de eliminar los datos?',
      showDenyButton: true,
      confirmButtonText: `Eliminar`,
    }).then((confirmation) => {
      if (confirmation.isConfirmed) {
        this.usersService.deleteRegister(id);
        this.loadData();
        this.loadConfirmDialog();
      } else if (confirmation.isDenied) {
        this.loadDialogError();
      }
    });
  }

  loadConfirmDialog(): void {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Transaccion realizada',
      showConfirmButton: false,
      timer: 1000,
    });
  }

  loadDialogError(): void {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Error',
      showConfirmButton: false,
      timer: 1000,
    });
  }
}
