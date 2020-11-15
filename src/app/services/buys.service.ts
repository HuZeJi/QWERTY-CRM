import { Injectable } from '@angular/core';
import { BUY } from './../utils/buys.data';
import { GENERAL } from './../utils/general-util.data';

@Injectable({
  providedIn: 'root',
})
export class BuysService {
  buys: BUY[] = [];
  generalData = new GENERAL();

  constructor() {}

  fillBuys(): any {
    console.log(this.buys);
    this.buys =
      this.buys.length <= 0 ? this.generalData.dataFillBuys() : this.buys;
  }

  getBuys(): BUY[] {
    return this.buys;
  }

  getOneBuy(id: number): BUY {
    return this.buys.find((e) => e.id === id);
  }

  setBuys(newBuys: BUY[]): void {
    this.buys = newBuys;
  }

  dataEdit(buy: BUY): void {
    this.buys = this.buys.map(
      (element) => (element = element.id === buy.id ? buy : element)
    );
  }

  newRegister(buy: BUY): void {
    this.buys.push(buy);
  }

  deleteRegister(id: number): void {
    this.buys.splice(this.buys.indexOf(this.buys.find((e) => e.id === id)), 1);
  }
}
