import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroProductosPipe } from './filtro-productos.pipe';



@NgModule({
  declarations: [ FiltroProductosPipe ],
  imports: [
    CommonModule
  ],
  exports: [ FiltroProductosPipe ]
})
export class PipesModule { }
