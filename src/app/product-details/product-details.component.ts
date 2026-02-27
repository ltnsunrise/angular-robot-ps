import { CartService } from './../cart.service';
import { Component, input, signal } from '@angular/core';
import { IProduct } from '../product.model';
import { CommonModule, CurrencyPipe, NgClass } from '@angular/common';
import { CategoryPartTypePipe } from '../category-part-type-pipe';

@Component({
  selector: 'bot-product-details',
  // imports: [CurrencyPipe, NgClass],
  imports: [CommonModule, CategoryPartTypePipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product = input.required<IProduct>()
  availableInventory = signal(5)
  constructor(private cartService: CartService) {

  }

  inventoryMapping = {
    '=0': 'Out of Stock',
    '=1': 'Only one left!',
    '=2': "Few left!",
    '=3': "Few left!",
    '=4': "Few left!",
    "other": "Get yours today!"
  }

  getImagePath(product: IProduct): string {
    return `/images/robot-parts/${product.imageName}`;
  }

  addToCart(event: MouseEvent): void {
    this.cartService.addToCart(this.product())
    this.availableInventory.update((p) => Math.max(0, p - 1));
  }

  getPriceClasses() {
    return { strikethrough: this.product().discount > 0 }
  }
}
