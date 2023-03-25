export class Pedido {
  idPedido!: number; //( ! ) no null never
  cantidad!: 0;
  adelantoProd?: number; //( ? ) with the null value positibility
  fechaPedido!: Date;
  horaPedido!: string;
  fechaEntrega!: string;
  horaEntrega!: string;
  estado!: string; //{estado: proceso || revision || realizado}
  anticipo?: number;
  montoTotal!: number;

  //Foraneas
  idCliente!: number;
  idSucursal!: number;
  idProducto!: number;

  /* constructor(obj?: any){
        this.idPedido = obj && obj.idPedido || null;
        this.cantidad = obj && obj.idCantidad || 0;
        this.adelantoProd = obj && obj.adelantoProd || null;
        this.fechaPedido = obj && obj.adelantoProd || null;
        this.horaPedido = obj && obj.adelantoProd || null;
        this.fechaEntrega = obj && obj.adelantoProd || null;
        this.horaEntrega = obj && obj.adelantoProd || null;
        this.estado = obj && obj.adelantoProd || null;
        this.anticipo = obj && obj.adelantoProd || null;
        this.montoTotal = obj && obj.adelantoProd || null;

        this.idCliente = obj && obj.adelantoProd || null;
        this.idSucursal = obj && obj.adelantoProd || null;
        this.idProducto = obj && obj.adelantoProd || null;
    } */
}
