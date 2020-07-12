import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: "",
    loadChildren: () =>
      import("./pages/tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: "",
    loadChildren: () =>
      import("./pages/tab1/tab1.module").then((m) => m.Tab1PageModule),
  },

  {
    path: "",
    loadChildren: () =>
      import("./pages/tab2/tab2.module").then((m) => m.Tab2PageModule),
  },
  {
    path: "",
    loadChildren: () =>
      import("./pages/tab3/tab3.module").then((m) => m.Tab3PageModule),
  },
  {

    path: "page-productos",
    loadChildren: () =>
      import("./pages/page-productos/page-productos.module").then(
        (m) => m.PageProductosPageModule
      ),
  },
  {
    path: "producto-agregar",
    loadChildren: () =>
      import('./pages/Productos/producto-agregar/producto-agregar.module').then((m) => m.ProductoAgregarPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
