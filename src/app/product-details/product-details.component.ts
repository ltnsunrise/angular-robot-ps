import { Component, computed, effect, inject, input, output, signal } from '@angular/core';
import { IProduct } from '../product.model';
import { CommonModule, CurrencyPipe, NgClass } from '@angular/common';
import { CategoryPartTypePipe } from '../category-part-type-pipe';
import { SliderComponent } from "../slider/slider.component";
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'bot-product-details',
  // imports: [CurrencyPipe, NgClass],
  imports: [CommonModule, CategoryPartTypePipe, SliderComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product = input.required<IProduct, IProduct>({ transform: this.normalizeDiscount })
  mode = input<'shop' | 'cart'>('shop')
  addToCart = output<IProduct>()
  removeFromCart = output<IProduct>()
  favorite = signal(1)

  inventoryService = inject(InventoryService)
  availableInventory = computed(() => this.inventoryService.get(this.product().id))

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

  remove() {
    this.removeFromCart.emit(this.product())
  }
  add() {
    this.addToCart.emit(this.product())
  }

  normalizeDiscount(product: IProduct): IProduct {
    if (product.discount < 1) {
      return product
    }
    return { ...product, discount: product.discount / 100 }
  }
}
