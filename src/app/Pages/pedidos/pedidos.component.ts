import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/model/pedido.model';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})

export class PedidosComponent implements OnInit {
  pedidos!: Pedido[];

  constructor(private pedService: PedidoService) { }

  ngOnInit(): void {
    this.pedService.getPedidos().subscribe((datas: any[]) => {
      console.log('------- pedidos -------', datas);
      this.pedidos = datas;
    });
  }

}
