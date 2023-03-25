import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public matDialog: MatDialog) { }

  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;       //inabilitar cierre al clikear fuera del modal
    dialogConfig.width = "85vw";
    dialogConfig.maxWidth = "85vw";
    //dialogConfig.height = "35vw";
    dialogConfig.minHeight = "35vw";
    dialogConfig.maxHeight = "100vw";
    dialogConfig.data = "algun dato...";    //envio de dato
    this.matDialog.open(DialogBodyComponent, dialogConfig);
  }

  ngOnInit(): void {

  }

}
