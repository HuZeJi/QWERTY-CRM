import { BUY } from './../utils/buys.data';
import { SELL } from './../utils/sells.data';
import { storage_I } from './../utils/storage-interface';

export class BUYDETAIL {
  id: number;
  buyHeader?: BUY;
  sellHeader?: SELL;
  product: storage_I;
  quantity: number;
}
