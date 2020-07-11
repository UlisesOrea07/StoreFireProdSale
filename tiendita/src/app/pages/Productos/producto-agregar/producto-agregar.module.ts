import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ProductoAgregarPageRoutingModule } from "./producto-agregar-routing.module";

import { ProductoAgregarPage } from "./producto-agregar.page";
import { ImagePicker } from "@ionic-native/image-picker/ngx";
import { ComponentsModule } from "../../../components/components.module";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoAgregarPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ProductoAgregarPage],
  providers: [ImagePicker],
})
export class ProductoAgregarPageModule {}
