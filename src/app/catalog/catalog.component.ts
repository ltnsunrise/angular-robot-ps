import { Component, inject } from '@angular/core';
import { Product } from './product.model';
import { ProductDetailsComponent } from '@shared/product-details/product-details.component';
import { CommonModule } from '@angular/common';
import { ProductsService } from './products.service';
import { CART_SERVICE_TOKEN } from '@core/cart.service';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'bot-catalog',
  imports: [CommonModule, ProductDetailsComponent],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  private cartService = inject(CART_SERVICE_TOKEN)
  private productsService = inject(ProductsService)
  products: Observable<Product[]> = this.productsService.getProducts()

  cart: Product[] = this.cartService.cart();

  addToCart(product: Product) {
    this.cartService.add(product);
  }
}
