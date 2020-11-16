import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services/data-service.service';
import { Clientes_I } from '../../utils/clients-interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { GenericDialogComponent } from '../shared/generic-dialog/generic-dialog.component';

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

  newClientObj = {
    title: "Ingreso de datos",
    type: 1,
    fields: [
      {index: 0, name: "id", text: "ID"},
      {index: 1, name: "name", text: "Name"},
      {index: 2, name: "direction", text: "Direction"},
      {index: 3, name: "phone", text: "Phone"},
    ]
  };


  title = "Hola mundo";

  constructor(private dataService: DataServiceService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.filldata();
  }

  filldata(){
    this.dataSource = new MatTableDataSource<Clientes_I>(this.dataService.getClients());
  }

  filterTable( e: Event ){
    const filterValue = (e.target as HTMLInputElement).value;   
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  newClient(){
    const dialogRef = this.dialog.open(GenericDialogComponent,{
      data: this.newClientObj
    });  

    dialogRef.afterClosed().subscribe((data) =>{
      if(data){
        Swal.fire({
          title: 'Estas seguro de guardar los cambios?',
          showDenyButton: true,
          confirmButtonText: 'Guardar',
        }).then((confirmation) => {
          if (confirmation.isConfirmed) {

            const [id, name, direction, phone] = data;
            const clientObj: Clientes_I = { id: id, name: name, direction: direction, phone: phone }
            this.dataService.createClient(clientObj);
            this.filldata();
          }
        });
      }
    });
  }

  editClient(id: number){
    const result = this.dataService.getClient(id);
    const editClientObj = {
      title: "Editar datos",
      type: 2,
      fields: [
        {index: 0, name: "id", text: "ID", value: result.id},
        {index: 1, name: "name", text: "Name", value: result.name},
        {index: 2, name: "direction", text: "Direction", value: result.direction},
        {index: 3, name: "phone", text: "Phone", value: result.phone},
      ]
    };

    if (result){
        const dialogRef = this.dialog.open(GenericDialogComponent,{
        data: editClientObj
      });    

      dialogRef.afterClosed().subscribe((data) =>{
        if(data){
          Swal.fire({
            title: 'Estas seguro de guardar los cambios?',
            showDenyButton: true,
            confirmButtonText: 'Guardar',
          }).then((confirmation) => {
            if (confirmation.isConfirmed) {
  
              const [id, name, direction, phone] = data;
              const clientObj: Clientes_I = { id: id, name: name, direction: direction, phone: phone }
              this.dataService.editClient(clientObj);
              this.filldata();
            }
          });
        }
      })

    }
  }

  deleteClient(id: number): void {
    Swal.fire({
      title: 'Estas seguro de eliminar los datos?',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
    }).then((confirmation) => {
      if (confirmation.isConfirmed) {
        this.dataService.deleteClient(id);
        this.filldata();
        this.loadConfirmDialog();
      } else if (confirmation.isDenied) {
      }
    });
  }

  loadConfirmDialog(): void {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Transaccion realizada',
      showConfirmButton: false,
      timer: 1000,
    });
  }

}
