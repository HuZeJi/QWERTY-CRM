import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { Clientes_I } from '../../utils/clients-interface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'name',
    'direction',
    'phone',
    'actions'
  ];

  dataSource: any;

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Clientes_I>(this.dataService.getClients());
  }

}
