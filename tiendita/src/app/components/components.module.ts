import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ModalComponent } from './modal/modal.component';
import { HeaderComponent } from './header/header.component';


import {ShowCategoriaComponent} from './show-categoria/show-categoria.component';
import {ShowProductoComponent} from './show-producto/show-producto.component';
import { AdminCategoriasComponent } from './admin-categorias/admin-categorias.component';
import { AdminProductosComponent } from './admin-productos/admin-productos.component';

import { BuscadorComponent } from './buscador/buscador.component';
import { ImagenpickerComponent } from './imagenpicker/imagenpicker.component';
import { PipesModule } from '../pipes/pipes.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AdminCategoriasComponent,
    AdminProductosComponent,
    ModalComponent,
    HeaderComponent,
    BuscadorComponent,
    ImagenpickerComponent,
    ShowCategoriaComponent,
    ShowProductoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    AdminCategoriasComponent,
    AdminProductosComponent,
    ModalComponent,
    HeaderComponent,
    ShowCategoriaComponent,
    ShowProductoComponent,
    BuscadorComponent,
    ImagenpickerComponent
  ],
})
export class ComponentsModule { }

