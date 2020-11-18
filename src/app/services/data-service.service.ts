import { Injectable } from '@angular/core';
import { storage_I } from '../utils/storage-interface';
import { Clientes_I } from '../utils/clients-interface';
import { Solution_I } from '../utils/solution.interface';
import { BugsReport_I } from '../utils/bugsreports.interface';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor() {}

  // Licences
  private licences: storage_I[] = [
    {
      id: 1,
      name: 'Developer Basic',
      type: 'Developer',
      duration: 1,
      price: 900,
    },
    {
      id: 2,
      name: 'Developer Medium',
      type: 'Developer',
      duration: 1,
      price: 1200,
    },
    {
      id: 3,
      name: 'Developer Pro',
      type: 'Developer',
      duration: 1,
      price: 1500,
    },
    {
      id: 4,
      name: 'Operator type A',
      type: 'Operator',
      duration: 1,
      price: 500,
    },
    {
      id: 5,
      name: 'Operator type B',
      type: 'Operator',
      duration: 1,
      price: 600,
    },
    {
      id: 6,
      name: 'Operator type c',
      type: 'Operator',
      duration: 1,
      price: 700,
    },
    {
      id: 7,
      name: 'Auditor pro',
      type: 'Auditor',
      duration: 1,
      price: 3000,
    },
  ];

  // Clients
  private clients: Clientes_I[] = [
    {
      id: 1,
      name: 'Company one',
      direction: '1230 NW 114th Ave',
      phone: '(305) 259-5632',
    },
    {
      id: 2,
      name: 'Company two',
      direction: '1160 NE 15th Ave',
      phone: '(303) 625-2356',
    },
    {
      id: 3,
      name: 'Company three',
      direction: '250 NE 123th Ave',
      phone: '(309) 123-8956',
    },
    {
      id: 4,
      name: 'Company four',
      direction: '1230 SW 180th Ave',
      phone: '(310) 963-4652',
    },
  ];

  // Solutions
  private Solutions: Solution_I[] = [
    {
      id: 1,
      name: 'Enterprise Basic',
      type: 'Enterprise',
      price: 500,
      duration: 12,
    },
    {
      id: 2,
      name: 'Enterprise Pro',
      type: 'Enterprise',
      price: 800,
      duration: 12,
    },
    {
      id: 3,
      name: 'Pyme Basic',
      type: 'Pyme',
      price: 1600,
      duration: 12,
    },
    {
      id: 4,
      name: 'Pyme Pro',
      type: 'Pyme',
      price: 3000,
      duration: 12,
    },
  ];

  // Bugs
  private bugs: BugsReport_I[] = [
    {
      id: 1,
      name: 'Email restore password',
      origin: 'Call Center',
      description:
        'when the user tries to reset his password, he does not receive the email with the link',
      status: 'Solved',
    },

    {
      id: 2,
      name: 'Instalation Error',
      origin: 'Email',
      description:
        'Message with error code 236, when installing Pyme Pro solution, installation in windows 10',
      status: 'In process',
    },

    {
      id: 3,
      name: 'User roles and limitations',
      origin: 'Call Center',
      description:
        'User blocked for downloading content in bulk even when permissions support it',
      status: 'Recived',
    },
  ];

  // LICENCES
  getLicences() {
    return this.licences;
  }

  getLicence(id: number) {
    const result = this.licences.find((i) => i.id === id);
    return result;
  }

  createLicence(licence: storage_I) {
    this.licences.push(licence);
  }

  editLicence(licence: storage_I) {
    const result = this.licences.find((i) => i.id === licence.id);
    result.id = licence.id;
    result.name = licence.name;
    result.type = licence.type;
    result.duration = licence.duration;
    result.price = licence.price;
  }

  deleteLicence(id: number) {
    const result = this.licences.find((i) => i.id === id);
    this.licences.splice(this.licences.indexOf(result), 1);
  }

  // CLIENTS
  getClients() {
    return this.clients;
  }

  getClient(id: number) {
    const result = this.clients.find((i) => i.id === id);
    return result;
  }

  editClient(client: Clientes_I) {
    const result = this.clients.find((i) => i.id === client.id);
    result.id = client.id;
    result.name = client.name;
    result.direction = client.direction;
    result.phone = client.phone;
  }

  deleteClient(id: number) {
    const result = this.clients.find((i) => i.id === id);
    this.clients.splice(this.clients.indexOf(result), 1);
  }

  createClient(client: Clientes_I) {
    this.clients.push(client);
  }

  // SOLUTIONS
  getSolutions() {
    return this.Solutions;
  }

  getSolution(id: number) {
    const result = this.Solutions.find((i) => i.id === id);
    return result;
  }

  createSolution(solution: Solution_I) {
    this.Solutions.push(solution);
  }

  editSolution(solution: Solution_I) {
    const result = this.Solutions.find((i) => i.id === solution.id);
    result.id = solution.id;
    result.name = solution.name;
    result.type = solution.type;
    result.price = solution.price;
    result.duration = solution.duration;
  }

  deleteSolution(id: number) {
    const result = this.Solutions.find((i) => i.id === id);
    this.Solutions.splice(this.Solutions.indexOf(result), 1);
  }
  // BUGS

  getBugs() {
    return this.bugs;
  }

  getBug(id: number) {
    const result = this.bugs.find((i) => i.id === id);
    return result;
  }

  createBug(bugReport: BugsReport_I) {
    this.bugs.push(bugReport);
  }

  editBug(bugReport: BugsReport_I) {
    const result = this.bugs.find((i) => i.id === bugReport.id);
    result.id = bugReport.id;
    result.name = bugReport.name;
    result.origin = bugReport.origin;
    result.description = bugReport.description;
    result.status = bugReport.status;
  }

  deleteBug(id: number) {
    const result = this.bugs.find((i) => i.id === id);
    this.bugs.splice(this.bugs.indexOf(result), 1);
  }

  //COMPRAS
}
