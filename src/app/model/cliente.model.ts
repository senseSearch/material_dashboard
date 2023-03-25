export class Cliente{
    constructor(
        public nombres: string,
        public apellidos: string,
        public nit: number,
        public celular: number,
        public direcciones: string[],
        public actividad: string,
        public notas: string,

        public contador: number,    //tendra que actualizarse a Ojeto Contador
        public modelos: string[],   //contendra enlace a imagenes
        public pedidos: number[]    //contendra id de pedidos
    ){}
}