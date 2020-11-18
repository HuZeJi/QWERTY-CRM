import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { BUYDETAIL } from 'src/app/utils/buys-body.data';
import { BUY } from 'src/app/utils/buys.data';

@Component({
  selector: 'app-ventas-details',
  templateUrl: './ventas-details.component.html',
  styleUrls: ['./ventas-details.component.scss'],
})
export class VentasDetailsComponent implements OnInit {
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
