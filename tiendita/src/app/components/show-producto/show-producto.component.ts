import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Producto } from '../../interfaces/productos.interface';
import { FirebaseService } from '../../services/firebase.service';
import { ModalComponent } from '../modal/modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-show-producto',
  templateUrl: './show-producto.component.html',
  styleUrls: ['./show-producto.component.scss'],
})
export class ShowProductoComponent implements OnInit {
  @Input() producto: Producto;

  constructor( private firebase: FirebaseService, private modalCtrl: ModalController ) { }

  ngOnInit() {}

  async seleccionado( item: Producto) {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        titulo: 'Agregar productos',
        subtitulo: '¿Cúantos productos desea agregar?',
        operacion: 'agregar',
        nombre: item.nombre,
        contenido: item.contenido,
        cantidad: 1,
        costo: item.costo,
        categoria: item.categoria,
        key: item.key
      }
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if ( Object.entries(data).length > 0 ) {
      this.firebase.itemSeleccionado(data);
    }

  }

}
