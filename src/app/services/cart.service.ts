import { computed, Injectable, signal } from '@angular/core';
import { CartItem } from '../interfaces/cart-item.interface';
import { Product } from '../interfaces/product.interface';

@Injectable({ providedIn: 'root' })
export class CartService {

    private readonly cartItems = signal<CartItem[]>([]);

    readonly totalItems = computed(() =>
        this.cartItems().reduce((acc, item) => acc + item.quantity, 0)
    );

    addToCart(product: Product): void {
        this.cartItems.update((items) => {
            const existingItem = items.find((item) => item.product.id === product.id);

            if (existingItem) {
                return items.map((item) =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...items, { product, quantity: 1 }];
        });
    }
}
