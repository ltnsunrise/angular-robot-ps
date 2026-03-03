import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { ProductsService } from './products.service';
import { IProduct } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  productsService = inject(ProductsService)
  products = this.productsService.resource.value

  private inventoryFromProducts = computed(() => {
    const list = this.products()
    if (!list) return {};
    return list.reduce((acc, item) => {
      acc[item.id] = 5;
      return acc;
    }, {} as Record<number, number>);
  })

  private inventory = signal<Record<number, number>>({})

  initEff = effect(() => {
    const initial = this.inventoryFromProducts();

    if (Object.keys(this.inventory()).length === 0 &&
      Object.keys(initial).length > 0) {
      this.inventory.set(initial);
    }
  });

  get(productId: number): number {
    return this.inventory()[productId] ?? 0
  }

  decrement(productId: number) {
    this.inventory.update((inv) => {
      const current = inv[productId] ?? 0
      return { ...inv, [productId]: Math.max(0, current - 1) }
    })
  }

  increment(productId: number) {
    this.inventory.update((inv) => {
      const current = inv[productId] ?? 0
      return { ...inv, [productId]: current + 1 }
    })
  }
}
