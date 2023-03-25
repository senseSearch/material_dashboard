import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';

@Component({
  selector: 'app-client-list-view',
  templateUrl: './client-list-view.component.html',
  styleUrls: ['./client-list-view.component.css']
})
export class ClientListViewComponent implements OnInit {

  @Input() cliente!: Cliente;
  public mods!: string[];
  public cantMod!: number; 
  public peds!: number[];
  public cantPed!: number;
  
  constructor() {  }

  ngOnInit(): void {
    this.mods = this.cliente.modelos;
    this.cantMod = this.mods.length;
    this.peds = this.cliente.pedidos;
    this.cantPed = this.peds.length;
    console.log('modelos: ', this.cantMod, 'pedidos: ', this.cantPed);
    //console.log('modelos: ', this.cantMod, 'peds: ', this.peds);
  }

  
/*
  <!-- 
      public nombres: string,
      public apellidos: string,
      public nit: number,
      public celular: number,
      public direcciones: string[],
      public actividad: string,
      public descripcion: string,

      public contador: string,
      public modelos: string[],
      public pedidos: number[]
-->

  */
}
