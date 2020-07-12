import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http: HttpClient) {
    console.table('Servicio listo');
  }

  cargarVentas(){
    return this.http.get('https://tiendita-93848.firebaseio.com/ventas.json');
  }
}
