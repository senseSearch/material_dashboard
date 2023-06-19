import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiCardComponent } from '../../Componentes/mi-card/mi-card.component';
import { PrearmadoComponent } from '../../Componentes/prearmado/prearmado.component';
import { ClientesComponent } from '../../Pages/clientes/clientes.component';
import { PedidosComponent } from '../../Pages/pedidos/pedidos.component';
import { SucursalComponent } from '../../Pages/sucursal/sucursal.component';
import { SubRoutingComponent } from '../../Pages/sucursal/sub-routing/sub-routing.component';
import { SubRouting2Component } from '../../Pages/sucursal/sub-routing2/sub-routing2.component';
import { EmpleadosComponent } from '../../Pages/empleados/empleados.component';
import { TalonarioComponent } from '../../Pages/talonario/talonario.component';
import { MaterialOficinaComponent } from '../../Pages/material-oficina/material-oficina.component';
import { ComponentsPruebaComponent } from '../../Componentes/components-prueba/components-prueba.component';

const routes: Routes = [
  { path: 'inicio', component: PrearmadoComponent },
  //anidado
  {
    path: 'sucursales',
    component: SucursalComponent,
    children: [
      {
        path: 'layout-a',
        component: SubRoutingComponent,
      },
      {
        path: 'layout-b',
        component: SubRouting2Component,
      },
    ],
  },
  { path: 'empleados', component: EmpleadosComponent },
  //submenu de productos reconfigurar
  { path: 'talonarios', component: TalonarioComponent },
  { path: 'materialOficina', component: MaterialOficinaComponent },
  { path: 'usuarios', component: MiCardComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'pruebas', component: ComponentsPruebaComponent },
  /* {path: '**', redirectTo: '/inicio', pathMatch: 'full'} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
