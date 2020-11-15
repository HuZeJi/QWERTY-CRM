import { Injectable } from '@angular/core';
import { storage_I } from '../utils/storage-interface';
import { Clientes_I } from '../utils/clients-interface';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  // Licences
  private licences : storage_I[] = [
    {
      id: 1,
      name: "Developer Basic",
      type: "Developer",
      duration: 1,
      price: 900
    },
    {
      id: 2,
      name: "Developer Medium",
      type: "Developer",
      duration: 1,
      price: 1200
    },
    {
      id: 3,
      name: "Developer Pro",
      type: "Developer",
      duration: 1,
      price: 1500
    },
    {
      id: 4,
      name: "Operator type A",
      type: "Operator",
      duration: 1,
      price: 500
    },
    {
      id: 5,
      name: "Operator type B",
      type: "Operator",
      duration: 1,
      price: 600
    },
    {
      id: 6,
      name: "Operator type c",
      type: "Operator",
      duration: 1,
      price: 700
    },
    {
      id: 7,
      name: "Auditor pro",
      type: "Auditor",
      duration: 1,
      price: 3000
    }
  ];

  // Clients
  private clients: Clientes_I[] = [
    {
      id: 1,
      name: 'Company one',
      direction: '1230 NW 114th Ave',
      phone: '(305) 259-5632'
    },
    {
      id: 2,
      name: 'Company two',
      direction: '1160 NE 15th Ave',
      phone: '(303) 625-2356'
    },
    {
      id: 3,
      name: 'Company three',
      direction: '250 NE 123th Ave',
      phone: '(309) 123-8956'
    },
    {
      id: 4,
      name: 'Company four',
      direction: '1230 SW 180th Ave',
      phone: '(310) 963-4652'
    },
  ]

  getLicences(){
    return this.licences;
  }

  getClients(){
    return this.clients;
  }


}
