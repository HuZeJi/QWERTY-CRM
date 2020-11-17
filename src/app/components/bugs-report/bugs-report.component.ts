import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BugsReport_I } from '../../utils/bugsreports.interface';
import { DataServiceService } from '../../services/data-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { GenericDialogComponent } from '../shared/generic-dialog/generic-dialog.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-bugs-report',
  templateUrl: './bugs-report.component.html',
  styleUrls: ['./bugs-report.component.scss']
})
export class BugsReportComponent implements AfterViewInit {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    'id',
    'name',
    'origin',
    'description',
    'status',
    'actions'
  ];

  dataSource: any;

  newBugObj = {
    title: "Ingreso de datos",
    type: 1,
    fields: [
      {index: 0, name: "id", text: "ID"},
      {index: 1, name: "name", text: "Name"},
      {index: 2, name: "origin", text: "Origin"},
      {index: 3, name: "description", text: "Description"},
      {index: 4, name: "status", text: "Status"},
    ]
  };


  constructor(private dataService: DataServiceService,
              private dialog: MatDialog) { 
                this.dataSource = new MatTableDataSource<BugsReport_I>(this.dataService.getBugs());
              }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }


  newBug(){
    const dialogRef = this.dialog.open(GenericDialogComponent,{
      data: this.newBugObj
    });  

    dialogRef.afterClosed().subscribe((data) =>{
      if(data){
        Swal.fire({
          title: 'Estas seguro de guardar los cambios?',
          showDenyButton: true,
          confirmButtonText: 'Guardar',
        }).then((confirmation) => {
          if (confirmation.isConfirmed) {

            const [id, name, origin, description, status] = data;
            const bugObj: BugsReport_I = { id: id, name: name, origin: origin, description: description, status: status }
            this.dataService.createBug(bugObj);
            this.filldata();
          }
        });
      }
    });
  }

  editBug(id: number){
    const result = this.dataService.getBug(id);
    const editBugObj = {
      title: "Editar datos",
      type: 2,
      fields: [
        {index: 0, name: "id", text: "ID", value: result.id},
        {index: 1, name: "name", text: "Name", value: result.name},
        {index: 2, name: "origin", text: "Origin", value: result.origin},
        {index: 3, name: "description", text: "Description", value: result.description},
        {index: 4, name: "status", text: "Status", value: result.status},
      ]
    };

    if (result){
        const dialogRef = this.dialog.open(GenericDialogComponent,{
        data: editBugObj
      });    

      dialogRef.afterClosed().subscribe((data) =>{
        if(data){
          Swal.fire({
            title: 'Estas seguro de guardar los cambios?',
            showDenyButton: true,
            confirmButtonText: 'Guardar',
          }).then((confirmation) => {
            if (confirmation.isConfirmed) {
  
              const [id, name, origin, description, status] = data;
              const bugObj: BugsReport_I = { id: id, name: name, origin: origin, description: description, status: status }
              this.dataService.editBug(bugObj);
              this.filldata();
            }
          });
        }
      })

    }
  }

  deleteBug(id: number): void {
    Swal.fire({
      title: 'Estas seguro de eliminar los datos?',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
    }).then((confirmation) => {
      if (confirmation.isConfirmed) {
        this.dataService.deleteBug(id);
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


  filldata(){
    this.dataSource = new MatTableDataSource<BugsReport_I>(this.dataService.getBugs());
    this.dataSource.paginator = this.paginator;
  }

  filterTable( e: Event ){
    const filterValue = (e.target as HTMLInputElement).value;   
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}
