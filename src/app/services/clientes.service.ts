import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

let clientes!: clienteInterface[];

export interface clienteInterface{
  nombres: string,
  apellidos:string,
  nit:number,
  celular:number,
  direcciones:string[],
  actividad:string,
  notas:string,
  numRef:number

  contador: number,    //tendra que actualizarse a Ojeto Contador
  modelos: string[],   //contendra enlace a imagenes
  pedidos: number[]    //contendra id de pedidos
}

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  get(){
    return clientes.slice();
  }

  add(cliente: clienteInterface){
    clientes.push(cliente);
    return this.get();
  }

  remove(cliente: clienteInterface){
    clientes.splice(clientes.indexOf(cliente), 1);
    return this.get();
  }

  loadClientes(){
    return this.http.get<clienteInterface[]>(`${this.apiURL}/clientes`);
  }
}