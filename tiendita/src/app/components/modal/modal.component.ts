import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() nombre: string;
  @Input() contenido: string;
  @Input() cantidad: number;
  @Input() costo: number;
  @Input() titulo: string;
  @Input() subtitulo: string;
  @Input() operacion: string;
  @Input() key: string;
  @Input() categoria: string;
  cantidadComprada = 0;

  constructor( private modalCtrl: ModalController, private firebase: FirebaseService ) {
  }

  ngOnInit() {
    this.cantidadComprada = this.cantidad;
  }

  Cancelar() {
    this.modalCtrl.dismiss({});
  }

  Aceptar(){
    if ( this.operacion === 'eliminar' ) {
      if ( this.cantidad > this.cantidadComprada ) {
        this.firebase.mensaje('La cantidad ingresada a superado la cantidad comprada');
        return;
      }
    } else if ( this.operacion === 'editar' ) {
      if ( this.cantidad <= 0 ) {
        this.firebase.mensaje('La cantidad ingresada no es valida, si desea eliminar porfavor seleccione la opción correspondiente');
        return;
      }
    }

    this.modalCtrl.dismiss({
      nombre: this.nombre,
      contenido: this.contenido,
      cantidad: this.cantidad,
      costo: this.costo,
      key: this.key,
      categoria: this.categoria
    });
  }

}
