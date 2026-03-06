import { Component, inject } from '@angular/core';
import { Product } from '@shared/product.model';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from '@shared/product-details/product-details.component';
import { CartService } from '@core/cart.service';
import { EngineersService } from '../engineers.service';
import { Observable } from 'rxjs';
import { IProductsServiceToken } from '@shared/products-service.interface';

@Component({
  standalone: true,
  selector: 'bot-catalog',
  imports: [CommonModule, ProductDetailsComponent],
  templateUrl: './squad-catalog.component.html',
  styleUrls: ['./squad-catalog.component.css'],
  providers: []
})
export class SquadCatalogComponent {
  private engineersService = inject(IProductsServiceToken)
  readonly squad: Observable<Product[]> = this.engineersService.getProducts()
  private cartService = inject(CartService)

  addToCart(engineer: Product) {
    this.cartService.add(engineer);
  }
}
