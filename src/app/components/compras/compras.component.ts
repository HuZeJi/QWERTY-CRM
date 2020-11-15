import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { BuysService } from './../../services/buys.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss'],
})
export class ComprasComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'proveedor',
    'fecha_emision',
    'fecha_cancelacion',
    'empleado',
    'total',
    'actions',
  ];

  // dataSource = new MatTableDataSource<any>();
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.buyService.fillBuys();
    this.loadData();
  }

  constructor(public dialog: MatDialog, private buyService: BuysService) {}

  applyFilter(event: Event): any {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadData(): void {
    this.dataSource = new MatTableDataSource(this.buyService.getBuys());
    this.dataSource.paginator = this.paginator;
  }
}
