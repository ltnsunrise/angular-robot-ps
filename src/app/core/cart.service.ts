import { computed, inject, Inject, Injectable, InjectionToken, signal } from '@angular/core';
import { Product } from '@shared/product.model';

export type CartOptions = {
  persistenceType: string,
  persistenceKey: string
}

export const CART_OPTIONS_TOKEN = new InjectionToken<CartOptions>('CartOptions');

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cartOptions = inject(CART_OPTIONS_TOKEN);

  private cartItems = signal<Product[]>(this.loadInitialCart());
  // private cartItems = signal<Product[]>([]);

  // constructor(@Inject(CART_OPTIONS_TOKEN) private cartOptions: CartOptions) {
  //   if (this.cartOptions && this.cartOptions.persistenceType === 'local') {
  //     const cartString = localStorage.getItem(this.cartOptions.persistenceKey);
  //     const cart = cartString ? JSON.parse(cartString) : [];
  //     this.cartItems.set(cart);
  //   }
  // }

  private loadInitialCart(): Product[] {
    if (this.cartOptions?.persistenceType === 'local') {
      const cartString = localStorage.getItem(this.cartOptions.persistenceKey);
      return cartString ? JSON.parse(cartString) : [];
    }
    return [];
  }

  get cart() {
    return this.cartItems.asReadonly();
  }



  add(product: Product) {
    this.cartItems.update((cart) => [...cart, product]);
    this.storeCart()
  }

  remove(product: Product) {
    this.cartItems.update((cart) => cart.filter((p) => p !== product));
    this.storeCart()
  }

  private storeCart() {
    if (this.cartOptions && this.cartOptions.persistenceType === 'local') {
      localStorage.setItem(this.cartOptions.persistenceKey, JSON.stringify(this.cartItems()));
    }
  }

  cartTotal = computed(() => this.cartItems().reduce((prev, next) => {
    let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
    return prev + next.price * discount;
  }, 0));

}
