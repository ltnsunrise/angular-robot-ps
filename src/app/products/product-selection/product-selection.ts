import { Component, computed, inject, linkedSignal, signal } from '@angular/core';
import { Product } from '../product';
// import { ProductData } from '../product-data';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { ProductService } from '../product.service';
import { ReviewList } from '../../reviews/review-list/review-list';
import { filter, fromEvent, map, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SupplierService } from '../../suppliers/supplier.service';

@Component({
  selector: 'app-product-selection',
  imports: [FormsModule, CurrencyPipe, ReviewList],
  templateUrl: './product-selection.html',
  styleUrl: './product-selection.css'
})
export class ProductSelection {
  pageTitle = 'Product Selection';
  private productService = inject(ProductService);
  private supplierService = inject(SupplierService)

  showHelp = signal(false);

  questionMark$ = fromEvent<KeyboardEvent>(document, 'keydown').pipe(
    map(event => event.key),
    // tap(key => console.log(key)),
    filter(key => key === '?' || key === 'Escape'),
    tap(key => this.showHelp.set(key === '?')),
    takeUntilDestroyed()
  ).subscribe()

  // sub = this.questionMark$.subscribe(
  // (key) => {
  // if (key) {
  //   this.showHelp.update(value => !value);
  // }
  // }
  // );

  // products = signal<Product[]>(ProductData.products);
  products = this.productService.productResource.value;
  isLoading = this.productService.productResource.isLoading;
  error = this.productService.productResource.error;
  errorMsg = computed(() => this.error()?.message ?? '');

  selectedProduct = this.productService.selectedProduct;

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

  readonly selectedProductSuppliers = this.supplierService.suppliersResource.value;
  suppliers = computed(() => this.selectedProductSuppliers().map(s => s.name).join(', '));
}
