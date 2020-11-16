import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Clientes_I } from 'src/app/utils/clients-interface';
import { DataServiceService } from '../../../services/data-service.service';

@Component({
  selector: 'app-generic-dialog',
  templateUrl: './generic-dialog.component.html',
  styleUrls: ['./generic-dialog.component.scss']
})
export class GenericDialogComponent implements OnInit {

  createModel: any[] = [];
  editModel: any[] = []

  constructor(public dialogRef: MatDialogRef<GenericDialogComponent>,
              private dataService: DataServiceService,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    if(this.data.type == 2){
     this.fillData(); 
    }
  }

  fillData(){
    const fields = this.data.fields;
      fields.forEach((element, index) => {
        this.editModel[index] = element.value;
      });
  }

}
