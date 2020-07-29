import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Ventas } from '../../interfaces/ventas.interface';
import { Categoria } from '../../interfaces/categorias.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  total = 0;
  ventas: Ventas[] = [];
  categorias: Categoria[] = [];

  constructor( private service: FirebaseService ) {
  }

  ngOnInit() {
    this.service.getCategorias().then( (data: Categoria[]) => {
      this.categorias = data;
    });
  }

  ionViewWillEnter(){
    this.total = 0;
    this.service.getVentas().then( data => {
      this.ventas = data;
      this.ventas.forEach( item => {
        this.total += item.total;
      });
     });
  }



}
