import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage {

  productos = [
    {
      nombre: 'Vestido Diva',
      precio: 45,
      descripcion: 'Vestido elegante ideal para cualquier ocasión.',
      imagen: 'assets/img/vestido1.jpg',
    },
    {
      nombre: 'Blusa Glam',
      precio: 28,
      descripcion: 'Blusa moderna con diseño exclusivo.',
      imagen: 'assets/img/blusa1.jpg',
    },
    {
      nombre: 'Conjunto Chic',
      precio: 55,
      descripcion: 'Conjunto cómodo y sofisticado.',
      imagen: 'assets/img/conjunto1.jpg',
    },
    {
      nombre: 'Falda Trendy',
      precio: 32,
      descripcion: 'Falda versátil y a la moda.',
      imagen: 'assets/img/falda1.jpg',
    },
    {
      nombre: 'Chaqueta Urban',
      precio: 60,
      descripcion: 'Perfecta para un look urbano y moderno.',
      imagen: 'assets/img/chaqueta1.jpg',
    },
    {
      nombre: 'Top Fashion',
      precio: 22,
      descripcion: 'Ideal para combinar con cualquier outfit.',
      imagen: 'assets/img/top1.jpg',
    },
  ];

  verProducto(producto: any) {
    console.log('Producto seleccionado:', producto);
    // Aquí luego puedes navegar a detalle o carrito
  }
}
