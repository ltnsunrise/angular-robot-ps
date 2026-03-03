import { Component, OnInit } from '@angular/core';
import { ProductDetailsComponent } from '../../shared/product-details/product-details.component';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';
import { productsArray } from '../products-data';

@Component({
  selector: 'bot-search',
  imports: [CommonModule, ProductDetailsComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true,
})
export class SearchComponent implements OnInit {
  products: Product[] = [];
  searchTerm: string = '';
  cart: Product[] = [];

  constructor() { }

  ngOnInit() {
    this.products = [...productsArray];
  }

  addToCart(product: Product) {
    this.cart.push(product);
  }

  filter(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
  }

  getFilteredProducts() {
    return this.searchTerm === ''
      ? this.products
      : this.products.filter(
        (product: Product) => product.name.toLowerCase().includes(this.searchTerm)
      );
  }
}
