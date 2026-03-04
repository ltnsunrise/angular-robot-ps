import { Component, inject, OnInit } from '@angular/core';
import { ProductDetailsComponent } from '../../shared/product-details/product-details.component';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';
import { productsArray } from '../products-data';
import { ProductsService } from '@catalog/products.service';
import { CartService } from '@core/cart.service';

@Component({
  selector: 'bot-search',
  imports: [CommonModule, ProductDetailsComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true,
})
export class SearchComponent {
  private productsService = inject(ProductsService)
  private cartService = inject(CartService)

  products: Product[] = [];
  searchTerm: string = '';
  cart: Product[] = this.cartService.cart;

  ngOnInit() {
    this.productsService.getProducts()
      .subscribe(p => this.products = p);
    setTimeout(() => {
      this.productsService.refreshProducts();
    }, 3000)
  }

  addToCart(product: Product) {
    this.cartService.add(product);
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
