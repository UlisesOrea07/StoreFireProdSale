import { Component } from '@angular/core';
import { Categoria } from '../../interfaces/categorias.interface';
import { FirebaseService } from '../../services/firebase.service';
import { ModalController, AlertController } from '@ionic/angular';
import { Producto } from '../../interfaces/productos.interface';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  categorias: Categoria[] = [];

  constructor( private firebase: FirebaseService, private alert: AlertController ) {
    this.firebase.getCategorias().then( (data: Categoria[]) => {
       this.categorias = data;
    });
  }

  async mostrarAlert() {
      const alert = await this.alert.create({
        header: 'Alert',
        message: `<img src="${this.firebase.categorias[0].imagen}" alt="g-maps" style="border-radius: 2px" (change)="imagen($event)" >`,
        buttons: [
            {
                text: 'Cancelar',
                role: 'cancel',
            },
            {
                text: 'Aceptar',
            },
        ],
    });
      await alert.present();
    }
}
