import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  private isMenuOpen = signal(false)

  private toggleMenu(): void {
    this.isMenuOpen.update((current) => !current)
  }
  
}
