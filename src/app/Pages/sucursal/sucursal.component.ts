import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from '../../model/empleado/Empleado.interface';
import { sucursalInterface, SucursalService } from 'src/app/services/sucursal.service';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit {

  sucursales!: sucursalInterface[];
  empleados!: Empleado[];
  firstPanelOpen: boolean = false;

  constructor(private sucService: SucursalService, private empService: EmpleadoService) { }

  ngOnInit(): void {
    this.sucService.loadSucursales().subscribe((datas: sucursalInterface[]) => {
      console.log('------- sucursales -------', datas);
      this.sucursales = datas;
    });
  }

  loadEmployes(){
    //validando que haya solo una carga de datos de empleados
    if(!this.firstPanelOpen){
      this.firstPanelOpen = true;
      if(this.empleados == null || this.empleados == undefined){
        this.empService.loadEmpleados().subscribe((data: Empleado[]) => {
          console.log('lista de empleados ah sido cargado');
          this.empleados = data;
        })
      }
    }
  }

}
