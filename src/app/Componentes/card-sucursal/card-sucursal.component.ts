import { Component, Input, OnInit } from '@angular/core';
import { Sucursal } from 'src/app/model/sucursal.model';

@Component({
  selector: 'app-card-sucursal',
  templateUrl: './card-sucursal.component.html',
  styleUrls: ['./card-sucursal.component.css']
})
export class CardSucursalComponent implements OnInit {

  @Input() sucursal!: Sucursal;
  constructor() { }

  ngOnInit(): void {
  }

}
