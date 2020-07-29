import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonList } from '@ionic/angular';
import { FirebaseService } from '../../services/firebase.service';
import { Ventas } from '../../interfaces/ventas.interface';
import { ModalComponent } from '../../components/modal/modal.component';
import { Producto } from '../../interfaces/productos.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  @ViewChild('lista', {static: false}) lista: IonList;
  ventas: Ventas[] = [];
  titulo: string;
  subtitulo: string;
  operacion: string;

  slideOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  constructor( private modalCtrl: ModalController,
               public firebase: FirebaseService,
    ) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.firebase.actualizarTotal();
  }

  saveCategoria(){
    const categoria = {
      imagen: 'Nuevo',
      nombre: 'Nombre'
    };
    this.firebase.saveCategoria(categoria);
  }

  realizarVenta(){
    const encabezado = 'Mensaje';
    const mensaje = '¿Desea realizar la venta?';
    const operacion = 'confirmar';
    this.firebase.mensajeVenta(encabezado, mensaje, operacion);
  }

  cancelarVenta(){
    const encabezado = 'Alerta';
    const mensaje = '¿Esta seguro de que desea cancelar la venta?';
    const operacion = 'cancelar';
    this.firebase.mensajeVenta(encabezado, mensaje, operacion);
  }

  eliminarProducto(item: Producto) {
    this.titulo = 'Eliminación de productos';
    this.subtitulo = '¿Cúantos productos desea eliminar?';
    this.operacion = 'eliminar';
    this.modal(item);
  }

  editarProducto(item: Producto) {
    this.titulo = 'Cantidad de productos';
    this.subtitulo = '¿Desea modificar la cantidad de productos a comprar?';
    this.operacion = 'editar';
    this.modal(item);
  }

  async modal(item: Producto) {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        titulo: this.titulo,
        subtitulo: this.subtitulo,
        operacion: this.operacion,
        nombre: item.nombre,
        contenido: item.contenido,
        costo: item.costo,
        categoria: item.categoria,
        cantidad: item.cantidad,
        key: item.key
      }
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if ( Object.entries(data).length === 0) {
      this.lista.closeSlidingItems();
      return;
    }
    else if ( this.operacion === 'eliminar' ) {
      this.firebase.eliminarItem(data);
      this.lista.closeSlidingItems();
    }
    else if ( this.operacion === 'editar' ) {
      if ( item.cantidad === data.cantidad) {
        this.firebase.mensaje('No se realizo ningún cambio');
        this.lista.closeSlidingItems();
        return;
      }
      this.firebase.editarItem(data);
      this.lista.closeSlidingItems();
    }

  }

}
