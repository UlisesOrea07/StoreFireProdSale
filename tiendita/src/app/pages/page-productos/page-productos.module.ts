import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageProductosPageRoutingModule } from './page-productos-routing.module';

import { PageProductosPage } from './page-productos.page';
import {ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageProductosPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [PageProductosPage]
})
export class PageProductosPageModule {}
