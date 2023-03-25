import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';

//definiendo tipo de objetos
interface Sucursal {
  index: number;
  sucursal: string;
  direccion: string;
}

@Component({
  selector: 'app-client-panel-list-view',
  templateUrl: './client-panel-list-view.component.html',
  styleUrls: ['./client-panel-list-view.component.css']
})
export class ClientPanelListViewComponent implements OnInit {
  index = {
    value: 0
  }


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


  sucursales: Sucursal[] = [
    {
      index: 0,
      sucursal: 'Casa Matriz',
      direccion: "Av. buenos aires zona san martin de porras nro 400 entre Av. juan jacinto la paz - bolivia Av. buenos aires zona san martin de porras nro 400 entre Av. juan jacinto la paz - bolivia"
    },{
      index: 1, 
      sucursal: 'Sucursal 1',
      direccion: "Av. juan jacinto la paz - bolivia Av. buenos aires zona san martin de porras nro 400 entre"
    },{
      index: 2,
      sucursal: 'Sucursal 2',
      direccion: "la paz - bolivia Av. buenos aires zona san martin de porras nro 400 entre Av. juan jacinto"
    },{
      index: 3,
      sucursal: 'Sucursal 3',
      direccion: "Av. buenos aires zona san martin de porras nro 400 entre la paz - bolivia"
    },{
      index: 4,
      sucursal: 'Sucursal 4',
      direccion: "Av. buenos aires la paz - bolivia"
    }
  ];

  selectedSuc = this.sucursales[this.index.value].sucursal;
  dirSucSelec = this.sucursales[this.index.value].direccion;
  
  set selectIndex(index: number){
    this.index.value = index;
    this.selectedSuc = this.sucursales[this.index.value].sucursal;
    this.dirSucSelec = this.sucursales[this.index.value].direccion;
  }

  get selectIndex(): number{
    return this.index.value;
  }
}
