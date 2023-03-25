import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit {

  cardLists: string[] = [
    "andres soto mayor",
    "juan andres tomas",
    "juan andres tomas",
    "juan andres tomas",
    "juan andres tomas",
    "juan andres tomas",
    "juan andres tomas",
    "juan andres tomas",
  ];

  constructor( public dialogRef: MatDialogRef<DialogBodyComponent>) { }

  close(){
    this.dialogRef.close("gracias por usarme!");
  }
  ngOnInit(): void {
  }

}
