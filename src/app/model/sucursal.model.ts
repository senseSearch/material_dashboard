export class Sucursal{
    constructor(
        public idSucursal: number,
        public nombre: string,
        public direccion: string,
        public idUsuarioEmpAsignado: number,
        public idPedidos: number[],
        public idPromotoresUsr: number[]
    ){}
}