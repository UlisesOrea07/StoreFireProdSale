import { Component, OnInit, Input } from '@angular/core';
import { Categoria } from '../../interfaces/categorias.interface';
import { Producto } from '../../interfaces/productos.interface';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-admin-categorias',
  templateUrl: './admin-categorias.component.html',
  styleUrls: ['./admin-categorias.component.scss'],
})
export class AdminCategoriasComponent implements OnInit {
  @Input() categoria: Categoria;

  constructor( private alert: AlertController ) { }

  ngOnInit() {}


  eliminarCategoria() {

  }

  editarCategoria() {

  }

  categoriaProducto() {

  }

  imagen(event: any) {
    console.log(event.target.files[0]);
  }
}
