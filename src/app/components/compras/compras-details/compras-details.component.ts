import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { BUY } from 'src/app/utils/buys.data';
import { BUYDETAIL } from './../../../utils/buys-body.data';

@Component({
  selector: 'app-compras-details',
  templateUrl: './compras-details.component.html',
  styleUrls: ['./compras-details.component.scss'],
})
export class ComprasDetailsComponent implements OnInit {
  storages: any;
  details: BUYDETAIL[] = [];
  detail = new BUYDETAIL();
  header = new BUY();

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    this.storages = this.dataService.getLicences();
    console.log(this.storages);
  }
}
