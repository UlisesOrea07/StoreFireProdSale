import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../../components/modal/modal.component';
import { VentasService } from '../../services/ventas.service';
import { Ventas } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  ventas: Ventas[] = [];
  total = 0;

  constructor( private modalCtrl: ModalController, private service: VentasService) {
  }

  ngOnInit(): void {
    this.cargarVentas();
  }

  cargarVentas(){
      this.service.cargarVentas().subscribe( (data: Ventas[]) => {
        this.ventas = data;
        this.ventas.forEach(item => {
          this.total += item.total;
        });
      });

  }


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
