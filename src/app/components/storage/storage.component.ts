import { Component, OnInit } from '@angular/core';

import { storage_I } from '../../utils/storage-interface';
import { MatTableDataSource } from '@angular/material/table';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'name',
    'type',
    'duration',
    'price',
    'actions'
  ];


  dataSource: any;

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
  this.getLicences();
  }

  getLicences(){
    this.dataSource = new MatTableDataSource<storage_I>(this.dataService.getLicences());
  }


}
