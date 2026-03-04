import { computed, Injectable, signal } from '@angular/core';
import { Product } from '@shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<Product[]>([]);

  add(product: Product) {
    this.cart.update((cart) => [...cart, product]);
  }

  remove(product: Product) {
    this.cart.update((cart) => cart.filter((p) => p !== product));
  }

  cartTotal = computed(() => this.cart().reduce((prev, next) => {
    let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
    return prev + next.price * discount;
  }, 0));

}
