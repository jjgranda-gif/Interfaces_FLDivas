import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [IonicModule, RouterModule],
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss']
})
export class StorePage {

  productos = [
    {
      nombre: 'Vestido Floral',
      precio: 39.99,
      imagen: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d'
    },
    {
      nombre: 'Chaqueta Denim',
      precio: 59.99,
      imagen: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f'
    },
    {
      nombre: 'Bolso Elegante',
      precio: 29.99,
      imagen: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa'
    }
  ];

}


