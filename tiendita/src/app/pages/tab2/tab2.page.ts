import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( private modalCtrl: ModalController ) {}

  realizarVenta(){

  }

  async eliminarProducto(id: string) {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        nombre: 'Cocacola es la mejor de todo el mundo',
        contenido: '600 ml',
        cantidad: 5,
        costo: 10
      }
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log(data);

  }

}
