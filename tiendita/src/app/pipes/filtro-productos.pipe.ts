import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../interfaces/productos.interface';

@Pipe({
  name: 'filtroProductos'
})
export class FiltroProductosPipe implements PipeTransform {

  transform(productos: Producto[], categoria: string): any[] {
    if ( categoria === '' ) {
      return productos;
    }

    categoria = categoria.toLowerCase();

    return productos.filter( item => {
      // includes busca el texto dado
      return item.categoria.toLowerCase().includes(categoria);
    });
  }

}
