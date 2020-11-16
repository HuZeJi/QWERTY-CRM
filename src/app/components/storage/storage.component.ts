import { Component, OnInit } from '@angular/core';

import { storage_I } from '../../utils/storage-interface';
import { MatTableDataSource } from '@angular/material/table';
import { DataServiceService } from '../../services/data-service.service';
import { Clientes_I } from '../../utils/clients-interface';
import { MatDialog } from '@angular/material/dialog';
import { GenericDialogComponent } from '../shared/generic-dialog/generic-dialog.component';
import Swal from 'sweetalert2';

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

  newLicenceObj = {
    title: "Ingreso de datos",
    type: 1,
    fields: [
      {index: 0, name: "id", text: "ID"},
      {index: 1, name: "name", text: "Name"},
      {index: 2, name: "type", text: "Type"},
      {index: 3, name: "duration", text: "Duration"},
      {index: 4, name: "price", text: "Price"},
    ]
  };

  constructor(private dataService: DataServiceService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  this.getLicences();
  }

  newLicence(){
    const dialogRef = this.dialog.open(GenericDialogComponent,{
      data: this.newLicenceObj
    });  

    dialogRef.afterClosed().subscribe((data) =>{
      if(data){
        Swal.fire({
          title: 'Estas seguro de guardar los cambios?',
          showDenyButton: true,
          confirmButtonText: 'Guardar',
        }).then((confirmation) => {
          if (confirmation.isConfirmed) {
            const [id, name, type, duration, price] = data;
            const licenceObj: storage_I = { id: id, name: name, type: type, duration: duration, price: price }
            this.dataService.createLicence(licenceObj);
            this.fillData();
          }
        });
      }
    });
  }

  editLicences(id: number){
    const result = this.dataService.getLicence(id);
    const editClientObj = {
      title: "Editar datos",
      type: 2,
      fields: [
        {index: 0, name: "id", text: "ID", value: result.id},
        {index: 1, name: "name", text: "Name", value: result.name},
        {index: 2, name: "type", text: "Type", value: result.type},
        {index: 3, name: "duration", text: "Duration", value: result.duration},
        {index: 4, name: "price", text: "Price", value: result.price},
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
              const [id, name, type, duration, price] = data;
              const licenceObj: storage_I = { id: id, name: name, type: type, duration: duration, price: price }
              this.dataService.editLicence(licenceObj);
              this.fillData();
            }
          });
        }
      })

    }
  }

  deleteLicence(id: number){
    Swal.fire({
      title: 'Estas seguro de eliminar los datos?',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
    }).then((confirmation) => {
      if (confirmation.isConfirmed) {
        this.dataService.deleteLicence(id);
        this.fillData();
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

  
  getLicences(){
    this.fillData();
  }

  fillData(){
    this.dataSource = new MatTableDataSource<storage_I>(this.dataService.getLicences());
  }

  filterTable( e: Event ){
    const filterValue = (e.target as HTMLInputElement).value;   
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}
