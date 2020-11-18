import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Clientes_I } from '../../utils/clients-interface';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { GenericDialogComponent } from '../shared/generic-dialog/generic-dialog.component';
import { Solution_I } from 'src/app/utils/solution.interface';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    'id',
    'name',
    'type',
    'price',
    'duration',
    'actions'
  ];

  dataSource: any;

  newSolutionObj = {
    title: "Ingreso de datos",
    type: 1,
    fields: [
      {index: 0, name: "id", text: "ID"},
      {index: 1, name: "name", text: "Name"},
      {index: 2, name: "type", text: "Type"},
      {index: 3, name: "price", text: "Price"},
      {index: 4, name: "duration", text: "Duration"},
    ]
  };

  constructor(private dataService: DataServiceService,
              private dialog: MatDialog) {
                this.dataSource = new MatTableDataSource<Solution_I>(this.dataService.getSolutions());
               }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  
  filldata(){
    this.dataSource = new MatTableDataSource<Solution_I>(this.dataService.getSolutions());
    this.dataSource.paginator = this.paginator;
  }

  filterTable( e: Event ){
    const filterValue = (e.target as HTMLInputElement).value;   
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  newSolution(){
    const dialogRef = this.dialog.open(GenericDialogComponent,{
      data: this.newSolutionObj
    });  

    dialogRef.afterClosed().subscribe((data) =>{
      if(data){
        Swal.fire({
          title: 'Estas seguro de guardar los cambios?',
          showDenyButton: true,
          confirmButtonText: 'Guardar',
        }).then((confirmation) => {
          if (confirmation.isConfirmed) {

            const [id, name, type, price, duration] = data;
            const solutionObj: Solution_I = { id: id, name: name, type: type, price: price, duration: duration }
            this.dataService.createSolution(solutionObj);
            this.filldata();
          }
        });
      }
    });
  }

  editSolution(id: number){
    const result = this.dataService.getSolution(id);
    const editClientObj = {
      title: "Editar datos",
      type: 2,
      fields: [
        {index: 0, name: "id", text: "ID", value: result.id},
        {index: 1, name: "name", text: "Name", value: result.name},
        {index: 2, name: "type", text: "Type", value: result.type},
        {index: 3, name: "price", text: "Price", value: result.price},
        {index: 4, name: "duration", text: "Duration", value: result.duration},
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
  
              const [id, name, type, price, duration] = data;
              const solutionObj: Solution_I = { id: id, name: name, type: type, price: price, duration: duration }
              this.dataService.editSolution(solutionObj);
              this.filldata();
            }
          });
        }
      })

    }
  }

  deleteSolution(id: number): void {
    Swal.fire({
      title: 'Estas seguro de eliminar los datos?',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
    }).then((confirmation) => {
      if (confirmation.isConfirmed) {
        this.dataService.deleteSolution(id);
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
