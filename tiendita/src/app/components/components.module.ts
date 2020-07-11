import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ModalComponent } from './modal/modal.component';
import { HeaderComponent } from './header/header.component';


import {ShowCategoriaComponent} from './show-categoria/show-categoria.component'
import {ShowProductoComponent} from './show-producto/show-producto.component'


@NgModule({
  declarations: [

    ModalComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ModalComponent,
    HeaderComponent
    ShowCategoriaComponent,
    ShowProductoComponent
  ],
})
export class ComponentsModule { }
