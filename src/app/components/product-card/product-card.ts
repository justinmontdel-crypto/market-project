import { Component, input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {

  product = input.required<Product>()

}
