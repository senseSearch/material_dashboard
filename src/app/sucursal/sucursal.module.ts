import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { SubRoutingComponent } from '../Pages/sucursal/sub-routing/sub-routing.component';
import { SubRouting2Component } from '../Pages/sucursal/sub-routing2/sub-routing2.component';

const routes: Routes = [
  {path: '', redirectTo: 'sucursales', pathMatch: 'full'},
  {path: 'routing1', component: SubRoutingComponent},
  {path: 'routing2', component: SubRouting2Component}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SucursalModule { }
