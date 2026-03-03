import { computed, inject, Injectable, signal } from '@angular/core';
import { IProduct } from './product.model';
import { InventoryService } from './inventory.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  inventoryService = inject(InventoryService)

  cart = signal<IProduct[]>([])

  addToCart(product: IProduct) {
    this.inventoryService.decrement(product.id)
    this.cart.update(cart => [...cart, product])
  }
  removeFromCart(product: IProduct) {
    this.inventoryService.increment(product.id)
    this.cart.update(cart => cart.filter(p => p.id !== product.id))
  }
  getCartItems(): IProduct[] {
    return this.cart();
  }


}
