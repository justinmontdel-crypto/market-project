import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({providedIn: 'root'})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Pera',
      price: 5,
      image: '/img/pera.png',
      category: 'Frutas',
    },
    {
      id: 2,
      name: 'Espárragos',
      price: 10,
      image: '/img/esparragos.png',
      category: 'Verduras',
    },
    {
      id: 3,
      name: 'Cebolla',
      price: 11,
      image: '/img/cebolla.png',
      category: 'Verduras',
    },
    {
      id: 4,
      name: 'Limón',
      price: 4,
      image: '/img/limon.png',
      category: 'Frutas',
    },
    {
      id: 5,
      name: 'Plátano',
      price: 8,
      image: '/img/platano.png',
      category: 'Frutas',
    },
    {
      id: 6,
      name: 'Zumo de naranja',
      price: 13,
      image: '/img/zumo_naranja.png',
      category: 'Zumos',
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

}
