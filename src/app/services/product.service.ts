import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({providedIn: 'root'})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Pera',
      price: 5,
      image: '../../../public/img/pera.png',
      category: 'frutas',
    },
    {
      id: 2,
      name: 'Espárragos',
      price: 10,
      image: '../../../public/img/esparragos.png',
      category: 'verduras',
    },
    {
      id: 3,
      name: 'Cebolla',
      price: 11,
      image: '../../../public/img/cebolla.png',
      category: 'verduras',
    },
    {
      id: 4,
      name: 'Limón',
      price: 4,
      image: '../../../public/img/limon.png',
      category: 'frutas',
    },
    {
      id: 5,
      name: 'Plátano',
      price: 8,
      image: '../../../public/img/platano.png',
      category: 'frutas',
    },
    {
      id: 6,
      name: 'Zumo de naranja',
      price: 13,
      image: '../../../public/img/zumo_naranja.png',
      category: 'zumos',
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

}
