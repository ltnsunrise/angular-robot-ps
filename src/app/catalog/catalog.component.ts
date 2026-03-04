import { Component, inject } from '@angular/core';
import { Product } from './product.model';
import { ProductDetailsComponent } from '@shared/product-details/product-details.component';
import { CommonModule } from '@angular/common';
import { productsArray } from './products-data';
import { ProductsService } from './products.service';
import { CartService } from '@core/cart.service';

@Component({
  standalone: true,
  selector: 'bot-catalog',
  imports: [CommonModule, ProductDetailsComponent],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  private cartService = inject(CartService)
  private productsService = inject(ProductsService)


  products: Product[] = [];
  ngOnInit() {
    this.productsService.getProducts()
      .subscribe(p => this.products = p);
    setTimeout(() => {
      this.productsService.refreshProducts();
    }, 3000)
  }

  cart: Product[] = this.cartService.cart();


  addToCart(product: Product) {
    this.cartService.add(product);
  }
}
