import { Component, effect, inject, signal, Signal } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductsService } from '../products.service';
import { IProduct } from '../product.model';
import { FilterByCategoryPipe } from '../filter-by-category-pipe';
import { CartService } from '../cart.service';

@Component({
  selector: 'bot-catalog',
  imports: [ProductDetailsComponent, FilterByCategoryPipe],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  categoryFilter: string | null = null
  productsService = inject(ProductsService)
  products = this.productsService.resource.value
  cartService = inject(CartService)

  addToCart(product: IProduct): void {
    this.cartService.addToCart(product)
    // this.availableInventory.update((p) => Math.max(0, p - 1));
  }

  addProduct() {
    this.products.update((p) => {
      if (p) {
        return [...p, {
          id: 6,
          description: "Something new.",
          name: "New arm",
          imageName: "arm-propeller.png",
          category: "arms",
          price: 160,
          discount: 0
        }]
      }
      return p
    })
  }

}
