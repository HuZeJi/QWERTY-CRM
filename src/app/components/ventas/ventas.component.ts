import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { SellsService } from './../../services/sells.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss'],
})
export class VentasComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'cliente',
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
    this.sellService.fillSells();
    this.loadData();
  }

  constructor(public dialog: MatDialog, private sellService: SellsService) {}

  applyFilter(event: Event): any {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadData(): void {
    this.dataSource = new MatTableDataSource(this.sellService.getSells());
    this.dataSource.paginator = this.paginator;
  }
}
