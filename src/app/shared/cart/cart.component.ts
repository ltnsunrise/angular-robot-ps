import { Component, inject, OnInit } from '@angular/core';
import { ProductDetailsComponent } from '@shared/product-details/product-details.component';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';
import { CartService } from '@core/cart.service';

@Component({
  selector: 'bot-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [CommonModule, ProductDetailsComponent],
  standalone: true,
})
export class CartComponent {
  private cartService = inject(CartService)
  private cart: Product[] = this.cartService.cart

  get cartItems() {
    return this.cart;
  }

  get cartTotal() {
    return this.cartService.cartTotal;
  }

  removeFromCart(product: Product) {
    this.cartService.remove(product);
  }

  getImageUrl(product: Product) {
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }
}
