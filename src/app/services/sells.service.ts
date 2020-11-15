import { Injectable } from '@angular/core';
import { SELL } from './../utils/sells.data';
import { GENERAL } from './../utils/general-util.data';

@Injectable({
  providedIn: 'root',
})
export class SellsService {
  sells: SELL[] = [];
  generalData = new GENERAL();

  constructor() {}

  fillSells(): any {
    console.log(this.sells);
    this.sells =
      this.sells.length <= 0 ? this.generalData.dataFillSells() : this.sells;
  }

  getSells(): SELL[] {
    return this.sells;
  }

  getOneSell(id: number): SELL {
    return this.sells.find((e) => e.id === id);
  }

  setSells(newSells: SELL[]): void {
    this.sells = newSells;
  }

  dataEdit(sell: SELL): void {
    this.sells = this.sells.map(
      (element) => (element = element.id === sell.id ? sell : element)
    );
  }

  newRegister(sell: SELL): void {
    this.sells.push(sell);
  }

  deleteRegister(id: number): void {
    this.sells.splice(
      this.sells.indexOf(this.sells.find((e) => e.id === id)),
      1
    );
  }
}
