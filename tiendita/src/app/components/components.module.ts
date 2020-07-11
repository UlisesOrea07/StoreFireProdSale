import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ShowCategoriaComponent} from './show-categoria/show-categoria.component'
import {ShowProductoComponent} from './show-producto/show-producto.component'


@NgModule({
  declarations: [
    ShowCategoriaComponent,
    ShowProductoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShowCategoriaComponent,
    ShowProductoComponent
  ]
})
export class ComponentsModule { }
