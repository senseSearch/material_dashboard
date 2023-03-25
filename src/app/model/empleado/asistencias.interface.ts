export interface Asistencias{
    idAsistencia: number,
    fecha: Date,
    horasMarcadas: Date[],
    /**  situaciones de marcado **/
    //si no marca por a mañana no le permitara marcar el resto de marcas hasta no comunicarse con el administrador
}