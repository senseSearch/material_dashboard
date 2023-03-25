/** para el diseño de pagina tomar en cuanta:
 * file:///D:/HTML%20Workspace/PLANTILLAS/DashBoard/kiaalap-master/all-students.html
 * file:///D:/HTML%20Workspace/PLANTILLAS/DashBoard/kiaalap-master/all-professors.html
 */

export interface Empleado{
    idEmpleado: number,
    nombres: string,
    apellidos: string,
    cargo: string,
    idSucursal: number,
    fInicio: Date,
    fFin: Date,
    salario: number,
    permisosUsr: string,
    idAsistencias: number
}