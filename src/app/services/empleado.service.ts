import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../model/empleado/Empleado.interface';

let empleados: Empleado[];

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  
  get(){
    empleados.slice();
  }

  add(empleado: Empleado){
    empleados.push(empleado);
    return this.get();
  }

  remove(empleado : Empleado){
    empleados.splice(empleados.indexOf(empleado), 1);
    return this.get();
  }

  loadEmpleados():Observable<Empleado[]>{
    return this.http.get<Empleado[]>(`${this.apiURL}/empleadoUsuario`);
  }
}