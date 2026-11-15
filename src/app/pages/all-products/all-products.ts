import { Component, inject, signal } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';
import { ProductCard } from '../../components/product-card/product-card';

@Component({
  selector: 'all-products',
  imports: [Header, ProductCard],
  templateUrl: './all-products.html',
  styleUrl: './all-products.scss',
})
export class AllProducts {

  private productService = inject(ProductService)
  products = signal<Product[]>(this.productService.getProducts());

  




}
