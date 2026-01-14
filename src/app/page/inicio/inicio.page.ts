import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  categorias = [
    {
      nombre: 'Vestidos',
      imagen: 'https://images.unsplash.com/photo-1520975916090-3105956dac38'
    },
    {
      nombre: 'Blusas',
      imagen: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab'
    },
    {
      nombre: 'Accesorios',
      imagen: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c'
    }
  ];

}
