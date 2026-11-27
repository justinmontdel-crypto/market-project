import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private readonly cartService = inject(CartService);

  protected readonly cartCount = this.cartService.totalItems;
  protected readonly isMenuOpen = signal(false)

  protected toggleMenu(): void {
    this.isMenuOpen.update((current) => !current)
  }
  
}
