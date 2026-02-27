import { Component, effect, inject, signal, Signal } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductsService } from '../products.service';
import { IProduct } from '../product.model';

@Component({
  selector: 'bot-catalog',
  imports: [ProductDetailsComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  categoryFilter: string | null = null
  productsService = inject(ProductsService)
  products = this.productsService.resource.value
  eff = effect(() => {
    console.log(this.products());

  })
  addProduct() {
    this.products.update((p) => [...p, {
      id: 6,
      description: "Something new.",
      name: "New arm",
      imageName: "arm-propeller.png",
      category: "arms",
      price: 160,
      discount: 0
    }])
  }

}
