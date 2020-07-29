import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import * as firebase from 'Firebase';
import { snapshotToArray } from '../../environments/environment';

import { Ventas } from '../interfaces/ventas.interface';
import { Categoria } from '../interfaces/categorias.interface';
import { Producto } from '../interfaces/productos.interface';

import { ToastController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  refVentas = firebase.database().ref('ventas/');
  refCategorias = firebase.database().ref('categoria/');
  refProductos = firebase.database().ref('productos/');

  ventas: Ventas[] = [];
  categorias: Categoria[] = [];
  productos: Producto [] = [];
  prodsSeleccionados: Producto[] = [];
  total = 0;

  constructor(private db: AngularFireDatabase,
              private toast: ToastController,
              private alertCtrl: AlertController) {
    this.cargarVentas();
  }

  cargarVentas(){
    return new Promise( (resolve, reject) => {
      this.refVentas.on('value', (resp) => {
        this.ventas = snapshotToArray(resp);
        resolve();
      });
    });
  }

  async getVentas() {
    await this.cargarVentas();
    return this.ventas;
  }

  getCategorias() {
    return new Promise( (resolve, reject) => {
      this.refCategorias.on('value', resp => {
        this.categorias = snapshotToArray(resp);
        resolve(this.categorias);
      }, errorObject => {
        reject();
        console.log('The read failed: ' + errorObject.code);
      });
    });
  }

  getProductos(){
    return new Promise( (resolve, reject) => {
      this.refProductos.on('value', resp => {
        this.productos = snapshotToArray(resp);
        resolve(this.productos);
      }, errorObject => {
        reject();
        console.log('The read failed: ' + errorObject.code);
      });
    });
  }

  saveVenta() {
    const venta = {
      fecha: new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear(),
      total: this.total
    };

    this.refVentas.push(venta).then( data => {
      this.mensaje('Venta guardada exitosamente');
      this.prodsSeleccionados = [];
      this.total = 0;
    }).catch( data => {
      this.mensaje('Ha ocurrido un error al intentar guardar la venta');
    });
  }

  saveCategoria(categoria: Categoria) {
    this.refCategorias.push(categoria);
  }

  cancelarVenta() {
    if ( this.prodsSeleccionados.length === 0 ){
      this.mensaje(';) Aún no hay productos seleccionados');
      return;
    }
    this.prodsSeleccionados = [];
    this.total = 0;
    this.mensaje('Venta cancelada');
  }

  itemSeleccionado(prod: Producto) {
    this.prodsSeleccionados.push(prod);
    this.mensaje('Agregado exitosamente');
  }

  eliminarItem(item: Producto) {
    const arrayTemp: Producto[] = this.prodsSeleccionados;
    this.prodsSeleccionados = arrayTemp.filter( prod => {
      if (prod.key === item.key) {
        if (prod.cantidad !== item.cantidad) {
          prod.cantidad -= item.cantidad;
          return prod;
        }
      } else {
        return prod;
      }
    });
    this.actualizarTotal();
    this.mensaje('Se elimino exitosamente el producto');
  }

  editarItem(item: Producto) {
    this.prodsSeleccionados = this.prodsSeleccionados.filter( prod => {
      if (prod.key === item.key) {
        if ( prod.cantidad !== item.cantidad ) {
          prod.cantidad = item.cantidad;
          return prod;
        }
      }
      return prod;
    });

    this.actualizarTotal();
    this.mensaje('Se edito exitosamente el producto');
  }

  actualizarTotal(){
    this.total = 0;
    this.prodsSeleccionados.forEach( item => {
      this.total += (item.costo * item.cantidad);
    });
  }

  async mensajeVenta(encabezado, mensaje, operacion) {
    if ( this.prodsSeleccionados.length === 0 ) {
      this.mensaje('Aún no hay productos seleccionados');
      return;
    }

    const alert = await this.alertCtrl.create({
      header: encabezado,
      message: mensaje,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            if (operacion === 'confirmar') {
              this.saveVenta();
            } else {
              this.cancelarVenta();
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async mensaje( message: string ) {
    const toast = await this.toast.create({
      message,
      duration: 1500
    });
    toast.present();
  }

}
