import { Component, computed, linkedSignal, signal } from '@angular/core';
import { Product } from '../product';
import { ProductData } from '../product-data';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-selection',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './product-selection.html',
  styleUrl: './product-selection.css'
})
export class ProductSelection {
  pageTitle = 'Product Selection';
  products = signal<Product[]>(ProductData.products);
  selectedProduct = signal<Product | undefined>(undefined);
  quantity = linkedSignal({
    source: this.selectedProduct,
    computation: () => 1
  })

  total = computed(() => {
    return this.quantity() * (this.selectedProduct()?.price ?? 0);
  })
  color = computed(() => {
    return this.total() > 200 ? 'green' : 'blue';
  })

  onDecrease() {
    this.quantity.update(q => Math.max(1, q - 1));
  }

  onIncrease() {
    this.quantity.update(q => q + 1);
  }

  // Mỗi lần change detection chạy → getter chạy
  // Có thể chạy rất nhiều lần
  // App lớn → dễ tụt performance
  // get total(): number {
  //   return this.quantity() * (this.selectedProduct()?.price ?? 0);
  // }

  // get color(): string {
  //   return this.total() > 200 ? 'green' : 'blue';
  // }
}
