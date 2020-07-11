import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ModalComponent } from './modal/modal.component';
import { HeaderComponent } from './header/header.component';


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
  ]
})
export class ComponentsModule { }
