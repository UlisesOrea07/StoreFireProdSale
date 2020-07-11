import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

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

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {}

  Cancelar() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  Aceptar(){
    this.modalCtrl.dismiss({
      nombre: this.nombre,
      contenido: this.contenido,
      cantidad: this.cantidad,
      costo: this.costo
    });
  }

}
