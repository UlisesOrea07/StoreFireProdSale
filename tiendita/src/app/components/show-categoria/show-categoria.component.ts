import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { Categoria } from '../../interfaces/categorias.interface';

@Component({
  selector: 'app-show-categoria',
  templateUrl: './show-categoria.component.html',
  styleUrls: ['./show-categoria.component.scss'],
})
export class ShowCategoriaComponent implements OnInit {
  @Input() categoria: Categoria;

  constructor(private router: Router) { }

  navigateCategoria(item: string) {
    this.router.navigate(['page-productos', item]);
  }

  ngOnInit() {}


}
