import { Component, inject, Signal, signal } from '@angular/core';
// import { CartItemComponent } from "../cart-item/cart-item.component";
import { IProduct } from '../product.model';
import { CartService } from '../cart.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { GroupByIdPipe } from '../group-by-id-pipe';

@Component({
  selector: 'bot-cart',
  imports: [ProductDetailsComponent, GroupByIdPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  private readonly cartService = inject(CartService)

  readonly cartItems = this.cartService.cart

  removeFromCart(product: IProduct): void {
    this.cartService.removeFromCart(product)
  }
}
