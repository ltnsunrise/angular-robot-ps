import { CartService } from './../cart.service';
import { Component, input, signal } from '@angular/core';
import { IProduct } from '../product.model';
import { CurrencyPipe, NgClass } from '@angular/common';

@Component({
  selector: 'bot-product-details',
  imports: [CurrencyPipe, NgClass],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product = input.required<IProduct>()
  availableInventory = signal(3)
  constructor(private cartService: CartService) {

  }

  getImagePath(product: IProduct): string {
    return `/images/robot-parts/${product.imageName}`;
  }

  addToCart(event: MouseEvent): void {
    this.cartService.addToCart(this.product())
    this.product().name += " (Added to cart)";
  }

  getPriceClasses() {
    return { strikethrough: this.product().discount > 0 }
  }
}
