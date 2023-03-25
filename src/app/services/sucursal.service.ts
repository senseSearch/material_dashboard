import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

//declaracion array contenedor de objetos de tipo sucursal
let sucursales: sucursalInterface[];

/* declaracion de clase abstracta sucursal "la ventaja en angular esque"
  no sera necesario instanciar objectos como el caso del uso de clases
  y son objetos compartido por diferentes usuarios (la acutalizacion
  la veran inmediatamente todos*/
export interface sucursalInterface {
  idSucursal: number,
  nombre: string,
  direccion: string,
  idUsuarioEmpAsignado: number,
  idPedidos: number[],
  idPromotoresUsr: number[]
}

@Injectable({
  providedIn: 'root'
})

export class SucursalService {
  private apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  get(){
    return sucursales.slice();
  }

  add(sucursal: sucursalInterface){
    sucursales.push(sucursal);
    return this.get();
  }

  remove(sucursal : sucursalInterface){
    sucursales.splice(sucursales.indexOf(sucursal),1);
    return this.get();
  }

  loadSucursales():Observable<sucursalInterface[]>{
    return this.http.get<sucursalInterface[]>(`${this.apiURL}/sucursales`);
  }
}