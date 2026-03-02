import { Component, input, output, signal } from '@angular/core';
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
  mode = input<'shop' | 'cart'>('shop')
  addToCart = output<IProduct>()
  removeFromCart = output<IProduct>()

  availableInventory = signal(5)

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

  getPriceClasses() {
    return { strikethrough: this.product().discount > 0 }
  }

  remove() { this.removeFromCart.emit(this.product()) }
  add() { this.addToCart.emit(this.product()) }
}
