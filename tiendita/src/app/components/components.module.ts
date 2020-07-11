import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BuscadorComponent } from "./buscador/buscador.component";
import { ImagenpickerComponent } from "./imagenpicker/imagenpicker.component";

@NgModule({
  declarations: [BuscadorComponent, ImagenpickerComponent],
  imports: [CommonModule],
  exports: [BuscadorComponent, ImagenpickerComponent],
})
export class ComponentsModule {}
