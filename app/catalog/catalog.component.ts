import { Component } from '@angular/core';
import { Product } from './product.model';
import { ProductDetailsComponent } from '@shared/product-details/product-details.component';
import { CommonModule } from '@angular/common';
import { productsArray } from './products-data';

@Component({
  standalone: true,
  selector: 'bot-catalog',
  imports: [CommonModule, ProductDetailsComponent],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  products: Product[] = productsArray;
  private cart: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    this.cart.push(product);
  }
}
