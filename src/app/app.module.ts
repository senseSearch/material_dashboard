import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modulos/routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components

import { FlexLayoutModule } from '@angular/flex-layout';

import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { DashBComponent } from './Componentes/dash-b/dash-b.component';
import { FormComponent } from './Componentes/form/form.component';
import { NavigateComponent } from './Componentes/navigate/navigate.component';
import { PrearmadoComponent } from './Componentes/prearmado/prearmado.component';
import { MiCardComponent } from './Componentes/mi-card/mi-card.component';
import { MiPanelComponent } from './Componentes/mi-panel/mi-panel.component';
import { PedidosComponent } from './Pages/pedidos/pedidos.component';
import { ClientFormComponent } from './Componentes/client-form/client-form.component';
import { PedidoFormComponent } from './Componentes/pedido-form/pedido-form.component';
import { DialogComponent } from './Componentes/dialog/dialog.component';
import { DialogBodyComponent } from './Componentes/dialog-body/dialog-body.component';

import { PaginatorComponent } from './Componentes/paginator/paginator.component';
import { ClientesComponent } from './Pages/clientes/clientes.component';

import { DireccionClienteComponent } from './Componentes/mi-card/subComponents/direccion-cliente/direccion-cliente.component';
import { DireccionSelecComponent } from './Componentes/mi-card/subComponents/direccion-selec/direccion-selec.component';
import { ExampleFormComponent } from './Componentes/example-form/example-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientListViewComponent } from './Componentes/client-list-view/client-list-view.component';
import { ClientPanelListViewComponent } from './Componentes/client-panel-list-view/client-panel-list-view.component';
import { SucursalComponent } from './Pages/sucursal/sucursal.component';
import { CardSucursalComponent } from './Componentes/card-sucursal/card-sucursal.component';
import { EmpleadosComponent } from './Pages/empleados/empleados.component';
import { EmpleadoCardComponent } from './Componentes/empleado-card/empleado-card.component';

//Servicios
import { ClientesService } from './services/clientes.service';
import { TalonarioComponent } from './Pages/talonario/talonario.component';
import { MaterialOficinaComponent } from './Pages/material-oficina/material-oficina.component';
import { TableComponent } from './Componentes/table/table.component';
import { PedidoService } from './services/pedido.service';
import { ProductService } from './services/product.service';
import { ProductosModule } from './modulos/productos/productos.module';
import { LibreriasModule } from './modulos/librerias/librerias.module';
import { ComponentsPruebaComponent } from './Componentes/components-prueba/components-prueba.component';

@NgModule({
  declarations: [
    SucursalComponent,
    CardSucursalComponent,

    AppComponent,
    DashBComponent,
    FormComponent,
    NavigateComponent,
    PrearmadoComponent,
    MiCardComponent,
    MiPanelComponent,
    PedidosComponent,
    ClientFormComponent,
    PedidoFormComponent,
    DialogComponent,
    DialogBodyComponent,
    PaginatorComponent,
    ClientesComponent,
    DireccionClienteComponent,
    DireccionSelecComponent,
    ExampleFormComponent,
    ClientListViewComponent,
    ClientPanelListViewComponent,
    EmpleadosComponent,
    EmpleadoCardComponent,
    TalonarioComponent,
    MaterialOficinaComponent,
    TableComponent,

    ComponentsPruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LayoutModule,
    DragDropModule,
    HttpClientModule,
    FormsModule,


    //importar nuestros modulos personalizados
    ProductosModule,
    LibreriasModule
  ],

  providers: [ClientesService, PedidoService, ProductService],
  bootstrap: [AppComponent],
})
export class AppModule { }
