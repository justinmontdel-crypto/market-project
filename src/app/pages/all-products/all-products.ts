import { Component, computed, inject, signal } from '@angular/core';
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

  private productService = inject(ProductService);
  products = signal<Product[]>(this.productService.getProducts());
  selectedCategory = signal<string | null>(null);

  selectCategory(category: string | null): void {
    if (this.selectedCategory() === category) {
      this.selectedCategory.set(null);
    } else {
      this.selectedCategory.set(category);
    }
  }

  filteredProducts = computed<Product[]>(() => {
    const currentCategory = this.selectedCategory();
    const allProducts = this.products();

    if (!currentCategory) {
      return allProducts;
    }

    return allProducts.filter((product) => product.category === currentCategory);
  });

  totalProducts = computed<number>(() => this.filteredProducts().length);


}
