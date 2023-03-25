import { Component, Input, OnInit, Output } from '@angular/core';

//definiendo tipo de objetos
interface Sucursal {
  index: number;
  sucursal: string;
  direccion: string;
}

@Component({
  selector: 'app-direccion-selec',
  templateUrl: './direccion-selec.component.html',
  styleUrls: ['./direccion-selec.component.css']
})

export class DireccionSelecComponent implements OnInit {

  index = {
    value: 0
  }
  
  constructor(){
  }

  ngOnInit(): void {
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
