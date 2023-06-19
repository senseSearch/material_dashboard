import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';


@NgModule({
  declarations: [
    ListProductsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    //exportamos aquellas clases { componentes, pipes, services, etc } que queramos compartir a quien importe este modulo
    ListProductsComponent
  ]
})
export class ProductosModule { }
