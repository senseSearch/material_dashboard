import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../model/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private apiURL = 'http://localhost:3000/pedidos';

  constructor(private http: HttpClient) { }

  getPedidos():Observable<Pedido[]>{
    return this.http.get<Pedido[]>(this.apiURL);
  }
}
