import { Component } from '@angular/core';
import { Product } from '@shared/product.model';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from '@shared/product-details/product-details.component';
import { engineers } from './engineers'

@Component({
  standalone: true,
  selector: 'bot-catalog',
  imports: [CommonModule, ProductDetailsComponent],
  templateUrl: './squad-catalog.component.html',
  styleUrls: ['./squad-catalog.component.css'],
  providers: []
})
export class SquadCatalogComponent {
  squad: Product[] = engineers;
  private cart: Product[] = [];

  constructor() { }

  addToCart(engineer: Product) {
    this.cart.push(engineer);
  }
}
