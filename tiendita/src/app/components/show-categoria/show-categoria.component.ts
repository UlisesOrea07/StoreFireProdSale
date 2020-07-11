import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

@Component({
  selector: 'app-show-categoria',
  templateUrl: './show-categoria.component.html',
  styleUrls: ['./show-categoria.component.scss'],
})
export class ShowCategoriaComponent implements OnInit {

  constructor(private router: Router) { }

  navigateToUser() {
    this.router.navigate(["/page-productos"]);
  }
  
  ngOnInit() {}


}
