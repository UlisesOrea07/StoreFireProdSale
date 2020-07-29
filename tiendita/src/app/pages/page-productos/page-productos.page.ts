import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';
import { Producto } from '../../interfaces/productos.interface';

@Component({
  selector: 'app-page-productos',
  templateUrl: './page-productos.page.html',
  styleUrls: ['./page-productos.page.scss'],
})
export class PageProductosPage implements OnInit {
  titulo = 'Lista de Productos';
  categoria = '';
  productos: Producto[] = [];

  constructor( private firebase: FirebaseService, private activedRouter: ActivatedRoute ) { }

  ngOnInit() {
    this.activedRouter.params.subscribe( params => {
      this.categoria = params['nombre'];
      this.firebase.getProductos().then( (data: Producto[]) => {
        this.productos = data;
      });
    } );
  }

}
